import Ember from 'ember';

const { Route, RSVP, inject, set } = Ember;

export default Route.extend({
  notify: inject.service(),
  session: inject.service(),

  actions: {
    getUserSpecified(){
      // Get the "new sticker" model
      let data = this.modelFor(this.routeName).newSticker;

      // GET to /users/5
      this.get('store').findRecord('user', 5)
        .then(function(user){
          console.log(user);
      });

      // GET to /users
      this.get('store').findAll('user')
        .then(function(users){
          console.log(users);
      });

      // GET to /users?filter[email]=fotis.lok@hotmail.com
      this.get('store').query('user', {
        filter: {
          email: 'fotis.lok@hotmail.com'
        }
      }).then(function(users){
        receiver = users.get("firstObject");
        console.log(receiver);
      });
    },
    createSticker() {
      // Get the new sticker model
      let data = this.modelFor(this.routeName).newSticker;

      // Create receiver record
      let receiver = {};

      // Create an Ember-Data record
      let sticker = this.store.createRecord('sticker', {title: data.title, receiver: receiver});

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
