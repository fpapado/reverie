import Ember from 'ember';

const { Route, RSVP, inject, set } = Ember;

export default Route.extend({
  notify: inject.service(),
  session: inject.service(),

  actions: {
    createSticker() {
      // Get the new sticker model
      let data = this.modelFor(this.routeName).newSticker;

      console.log(data.receiver);

      // Create an Ember-Data record
      let sticker = this.store.createRecord('sticker', {title: data.title, receiver: this.get('session').currentUser});

      // Clear existing errors
      set(this.modelFor(this.routeName).newSticker, 'errors', []);

      sticker.save().then(() => {
        // Notify user
        this.get('notify').success(`Sent sticker ${data.title} to ${data.receiver}`);
        // Reset input
        this.modelFor(this.routeName).newSticker.title = '';
        this.modelFor(this.routeName).newSticker.receiver = '';

      }).catch((err) => {
        // Unload record, pass errors to UI
        this.store.unloadRecord(sticker);

        set(this.modelFor(this.routeName).newSticker, 'errors',
            (err.errors || []).mapBy('detail'));

        // Notify user
        this.get('notify').error('There was a problem sending your sticker');
      });
    }
  },

  model() {
    return RSVP.hash({
      stickers: this.get('session').currentUser.get('stickers'),
      newSticker: {title: '', receiver: '', errors: []}
    });
  }
});
