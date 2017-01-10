import Ember from 'ember';

const { Route, RSVP, inject, set } = Ember;

export default Route.extend({
  notify: inject.service(),
  session: inject.service(),

  actions: {
    createSticker() {
      // Get the "new sticker" model
      let data = this.modelFor(this.routeName).newSticker;

      // Create an Ember-Data record for new sticker
      let sticker = this.store.createRecord('sticker', {title: data.title});

      // Get receiver record from API
      // An alternative is query('user', {filter: { email: data.receiver}})
      // but we have deprecated it for now
      this.get('store').query('user', {
        email: data.receiver
      }).then((users) => {
        let rec = users.get('firstObject');

        if (!rec) {
          // model.errors only shows server- errors; we notify the user here
          this.get('notify').error('There user you specified was not found :(');
          throw (new Error('User not found'));
        }

        sticker.set('receiver', rec);

        // Clear existing errors
        set(this.modelFor(this.routeName).newSticker, 'errors', []);

        return sticker.save();
      }).then(() => {
        // Notify user
        this.get('notify').success(`Sent sticker to ${data.receiver}!`);

        // Reset input
        set(this.modelFor(this.routeName).newSticker, 'title', '');
        set(this.modelFor(this.routeName).newSticker, 'receiver', '');
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
      newSticker: {title: '', receiver: '', errors: []}
    });
  }
});
