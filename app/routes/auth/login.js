import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),
  notify: inject.service(),

  model() {
    return {
      email: '',
      password: ''
    };
  }
});
