import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from '../config/environment';

export default JSONAPIAdapter.extend({
  host: config.DS.host,
  namespace: config.DS.namespace,

  urlForCreateRecord(modelName/* , snapshot*/) {
    // In our API backend, registering (creating user record)
    // happens via POST to /register rather than /users
    // in order to align with JWT/OAuth; we inform DS of this
    switch (modelName) {
      case 'user':
      case 'users':
        return this._super(...arguments).replace('users', 'register');
      default:
        return this._super(...arguments);
    }
  }
});
