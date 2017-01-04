import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  actions: {
    doRegister() {
      this.get('currentModel').save()
        .then(() => {
          this.transitionTo('auth.login');
        });
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});
