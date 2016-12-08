import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';
import config from 'reverie/config/environment';
import Ember from 'ember';

const { assert, isEmpty } = Ember;

function createDb() {
  let { localDb } = config.emberPouch;

  assert('emberPouch.localDb must be set', !isEmpty(localDb));

  let db = new PouchDB(localDb);

  if (config.emberPouch.remoteDb) {
    let remoteDb = new PouchDB(config.emberPouch.remoteDb);

    db.sync(remoteDb, {
      live: true,
      retry: true
    });
  }

  return db;
}

export default Adapter.extend({
  init() {
    this._super(...arguments);
    this.set('db', createDb());
  }
});
