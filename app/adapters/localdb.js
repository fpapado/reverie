import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

PouchDB.debug.enable('*');

let remote = new PouchDB('http://localhost:5984/offline');
let db = new PouchDB('local_pouch');

db.sync(remote, {
  live: true,
  retry: true
});

export default Adapter.extend({
});
