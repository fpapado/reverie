import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { Controller, inject } = Ember;

export default Controller.extend({
  notify: inject.service(),

  doRegister: task(function* () {
    let user = this.get('model');

    try {
      yield timeout(2000);
      yield user.save();

      // Successfully saved
      yield this.get('notify').success('Registered! Please log in now :)');
      this.transitionToRoute('auth.login');

    } catch(e) {
      let { errors } = e;

      // List all errors
      this.get('notify').error(errors.mapBy('detail').join(', '));
    }
  }).drop()
});
