import Ember from 'ember';

const { Controller, computed, inject } = Ember;

export default Controller.extend({
  session: inject.service(),
  isCurrentRouteIndex: computed.equal('currentRouteName', 'index')
});
