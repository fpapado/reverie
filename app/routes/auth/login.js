import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  model() {
    return {
      email: '',
      password: ''
    };
  }
});
