import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),
  notify: inject.service(),

  actions: {
    doLogin() {
      let user = this.get('currentModel');
      this.get('session')
        .authenticate(
          'authenticator:reverie', user.email, user.password
        ).then(() => {
          // Success
          this.get('notify').success('Logged In!');
        }).catch((response) => {
          let { errors } = response;

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
        });
    }
  },
  model() {
    return {
      email: '',
      password: ''
    };
  }
});
