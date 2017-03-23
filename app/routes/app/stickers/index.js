import Ember from 'ember';

const { Route, RSVP, inject } = Ember;

export default Route.extend({
  session: inject.service(),

  model() {
    let uid = this.get('session').currentUser.id;
    return RSVP.hash({
      // A downside of this approach is that the data is not linked to the
      // user's model.
      // TODO: Investigate if we can sideload 'sender' if we fetch from
      //  the user relationship instead
      // TODO: Also consider reload: true or background reload
      // eslint-disable-next-line camelcase
      stickers: this.store.query('sticker', {user_id: uid, include: 'sender'}),
      categories: this.store.findAll('category')
    });
  }
});
