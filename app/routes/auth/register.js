import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  notify: inject.service(),
  actions: {
    doRegister() {
      this.modelFor(this.routeName).save()
        .then(() => {
          // Successfully saved
          this.transitionTo('auth.login');
          this.get('notify').success('Registered! Please log in now :)');
        })
        .catch((resp) => {
          let { errors } = resp;
          this.get('notify').error(errors.mapBy('detail').join(', '));
        });
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});
