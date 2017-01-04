import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),
  actions: {
    doLogin() {
      let user = this.get('currentModel');
      this.get('session')
        .authenticate(
          'authenticator:reverie', user.email, user.password
        );
    }
  },
  model() {
    return {
      email: '',
      password: ''
    };
  }
});
