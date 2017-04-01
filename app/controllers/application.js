import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  isCurrentRouteIndex: computed.equal('currentRouteName', 'index')
});
