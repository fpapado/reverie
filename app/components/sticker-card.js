import Ember from 'ember';
import { task } from 'ember-concurrency';
import { email, message, category } from '../utils/user-validations';
import { buildValidations } from 'ember-cp-validations';

const { Component, inject, set } = Ember;

const Validations = buildValidations({
  'model.newSticker.receiver': email,
  'model.newSticker.category': category,
  'model.newSticker.title': message
});

export default Component.extend(Validations, {
  notify: inject.service(),
  session: inject.service(),
  store: inject.service(),
  connection: inject.service(),

  sendSticker: task(function* () {
    // Get the "new sticker" model
    let data = this.get('model').newSticker;

    // Create an Ember-Data record for new sticker
    let sticker = this.get('store').createRecord('sticker', {title: data.title, category: data.category});
    let users = [];

    // Get receiver record from API
    // Could possibly use .queryRecord if we know the result is a single record
    try {
      users = yield this.get('store')
        .query('user', { email: data.receiver });
    } catch(err) {
      this.get('notify').error('There was a problem getting the user you requested');
      set(this.get('model').newSticker, 'errors',
          (err.errors || []).mapBy('detail'));
      return false;
    }

    // Check that we got one
    let rec = users.get('firstObject');
    if (!rec) {
      // model.errors only shows server- errors; we notify the user here
      this.get('notify').error('There user you specified was not found :(');
      throw (new Error('User not found'));
    }

    // Set receiver, clear existing errors
    sticker.set('receiver', rec);
    set(this.get('model').newSticker, 'errors', []);

    // Save sticker to back-end
    try {
      yield sticker.save();
    } catch(err) {
      // Unload record, pass errors to UI
      this.get('store').unloadRecord(sticker);
      set(this.get('model').newSticker, 'errors',
          (err.errors || []).mapBy('detail'));

      // Notify user
      this.get('notify').error('There was a problem sending your sticker');
      return false;
    }

    // Success! Notify user.
    this.get('notify').success(`Sent sticker to ${data.receiver}!`);

    // Reset input
    set(this.get('model').newSticker, 'title', '');
    set(this.get('model').newSticker, 'receiver', '');
    set(this.get('model').newSticker, 'category', '');
  }).drop()
});
