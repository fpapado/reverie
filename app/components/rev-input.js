import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['mb4', 'input-field'],
  type: 'text',
  // Concatenate all validation errors into comma-separated string
  _errorMessages: computed('errors.[]', function() {
    return (this.get('errors') || []).join(', ');
  })
});
