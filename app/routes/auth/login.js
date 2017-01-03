import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  actions: {
    doLogin() {
      alert('login attempted');
    }
  }
});
