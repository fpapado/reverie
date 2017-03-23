import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Controller, inject } = Ember;

export default Controller.extend({
  notify: inject.service('notify'),
  session: inject.service(),
  store: inject.service(),

  nextSticker: task(function* (advanceBy = 1) {
    let stickers = yield this.get('session').currentUser.get('stickers');
    let current = stickers.indexOf(this.get('model'));

    let next = current;
    let max = stickers.length;

    // Cycle through the array forward or backward
    if (advanceBy > 0) {
      next = (current + advanceBy) % max;
    } else {
      next = (max + ((current + advanceBy) % max)) % max;
    }

    let nextSticker = stickers.objectAt(next);

    this.transitionToRoute('app.stickers.show', nextSticker);
  }).drop()
});
