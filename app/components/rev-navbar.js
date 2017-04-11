import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  burgerMenu: inject.service(),
  classNames: ['w-100', 'top-0', 'fixed', 'static-l'],
  actions: {
    burgerToggle() {
      console.log("yo");
      this.get('burgerMenu').toggleProperty('open');
    }
  }
});
