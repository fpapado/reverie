import Ember from 'ember';
import config from '../config/environment';
import fetch from 'ember-network/fetch';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),
  // Ensure user is authenticated
  beforeModel() {
    if (!this.get('session').get('isAuthenticated')) {
      this.transitionTo('auth.login');
    }
  },
  // Set session.currentUser:
  // Our API backend does not return a user object upon authenticating
  // rather a JWT token, per OAuth. In order to get the user object from it
  // we have to hit the /api/user/current endpoint, which reads the user from
  // the token and returns them formatted as JSONAPI.
  afterModel() {
    return fetch(`${config.DS.host}/${config.DS.namespace}/user/current`, {
      type: 'GET',
      headers: {
        'Authorization': `Bearer ${this.get('session').get('session.content.authenticated.access_token')}`
      }
    }).then((raw) => {
      return raw.json().then((data) => {
        let currentUser = this.store.push(data);
        this.set('session.currentUser', currentUser);
      });
    });
  }
});
