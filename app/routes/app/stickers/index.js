import Ember from 'ember';

const { Route, RSVP, inject } = Ember;

export default Route.extend({
  session: inject.service(),

  model() {
    // Used with the explicit query below, if enabled
    let uid = this.get('session').currentUser.id;
    return RSVP.hash({
      // A downside of this approach is that the data is not linked to the
      // user's model, but makes sideloading explicit.
      // eslint-disable-next-line camelcase
      stickers: this.store.query('sticker', {user_id: uid, include: 'sender,categories'}),

      // A bit "magical", as Ember-data handles loading the async relationship
      // via GET at /users/:id/stickers. Note that this method does not allow
      // for explicit sideloading atm. The API currently always sideloads
      // categories and senders, but if it changes, use the query above.

      // The upside is that this allows better linking/caching of a user's
      // stickers in the model, which does not happen with store.query.
      // stickers: this.get('session').currentUser.get('stickers', {include: 'sender'}),

      // It is important to have the categories available, even if the user
      // has not been awarded all of them (thus not included in query above)
      categories: this.store.findAll('category')
    });
  }
});
