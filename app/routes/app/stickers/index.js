import Ember from 'ember';

const { Route, RSVP, inject } = Ember;

export default Route.extend({
  session: inject.service(),

  model() {
    return RSVP.hash({
      // Note that this way of getting stickers does not allow
      // sideloading. A better option migth be store.findAll()
      // with {include: 'sender'}
      stickers: this.get('session').currentUser.get('stickers')
    });
  }
});
