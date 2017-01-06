import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),
  notify: inject.service(),

  actions: {
    doLogin() {
      return this.get('doLoginTask').perform();
    }
  },

  doLoginTask: task(function* () {
    // change to this.get(this.routeName)
    let user = this.get('currentModel');

    timeout(5000);

    try {
      yield this.get('session')
        .authenticate(
            'authenticator:reverie',
            user.email,
            user.password
            )
        // Success
        this.get('notify').success('Logged In!');

    } catch(e) {
      let { errors } = e;

      // Check if there's a 401
      if (errors.mapBy('code').indexOf(401) >= 0) {
        // Flash Unauthorized
        this.get('notify')
          .error('Incorrect username or password, please try again');
      } else {
        // Other API errors
        this.get('notify')
          .error('There was a Server Error, please try again later');
      }
    }
  }).drop(),

  model() {
    return {
      email: '',
      password: ''
    };
  }
});
