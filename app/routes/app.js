import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),
  // Ensure user is authenticated
  beforeModel() {
    if (!this.get('session').get('isAuthenticated')) {
      this.transitionTo('auth.login');
    }
  }
});
