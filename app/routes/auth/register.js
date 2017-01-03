import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  actions: {
    doRegister() {
      alert('registration attempted');
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});
