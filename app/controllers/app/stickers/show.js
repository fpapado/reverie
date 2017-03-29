import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Controller, inject } = Ember;

export default Controller.extend({
  notify: inject.service('notify'),
  session: inject.service(),
  store: inject.service(),

  nextSticker: task(function* (advanceBy = 1) {
    // Deprecated while CORS HSTS redirect is an issue
    // let stickers = yield this.get('session').currentUser.get('stickers');

    // let uid = yield this.get('session').currentUser.id;
    // eslint-disable-next-line camelcase
    // let stickers = yield this.store.query('sticker', {user_id: uid, include: 'sender,categories'});

    let stickers = yield this.get('store').peekAll('sticker');

    let current = stickers.indexOf(this.get('model'));

    let next = current;
    let max = stickers.get('length');

    // Cycle through the array forward or backward
    if (advanceBy > 0) {
      next = (current + advanceBy) % max;
    } else {
      next = (max + ((current + advanceBy) % max)) % max;
    }

    if (next === 0 || next === max - 1) {
      let uid = yield this.get('session').currentUser.id;
      yield this.get('store').query('sticker', {
      // eslint-disable-next-line camelcase
        user_id: uid,
        include: 'sender,categories'
      });
    }

    let nextSticker = stickers.objectAt(next);

    this.transitionToRoute('app.stickers.show', nextSticker);
  }).drop()
});
