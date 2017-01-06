import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { Controller, inject } = Ember;

export default Controller.extend({
  notify: inject.service(),
  session: inject.service(),

  doLogin: task(function* () {
    let user = this.get('model');

    try {
      yield this.get('session')
        .authenticate(
            'authenticator:reverie',
            user.email,
            user.password
            );
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
  }).drop()
});
