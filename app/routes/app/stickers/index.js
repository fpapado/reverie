import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),

  model() {
    return {
      loadTask: this.get('fetchStickersTask').perform()
    };
  },

  setupController(controller) {
    this._super(...arguments);
    let stickers = this.store.peekAll('sticker');
    // TODO: filter to find user ...
    // TODO: might need to sideload receiver for this
    //  or check ID
    controller.set('_loadedStickers', stickers);
  },

  fetchStickersTask: task(function* () {
    // See notes/ for why .currentUser.get('stickers') is not used
    let uid = yield this.get('session').currentUser.id;
    return yield this.store.query('sticker', {
      // eslint-disable-next-line camelcase
      user_id: uid,
      include: 'sender,categories'
    });
  })
});
