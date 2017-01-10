import Ember from 'ember';

const { Route, RSVP, inject } = Ember;

export default Route.extend({
  session: inject.service(),

  model() {
    let uid = this.get('session').currentUser.id;
    return RSVP.hash({
      // Note that this way of getting stickers does not allow
      // sideloading. A better option migth be store.findAll()
      // with {include: 'sender'}
      // TODO: Also consider reload: true or background reload
      // eslint-disable-next-line camelcase
      stickers: this.store.query('sticker', {user_id: uid, include: 'sender'})
    });
  }
});
