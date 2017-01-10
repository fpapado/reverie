import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  model() {
    return RSVP.hash({
      newSticker: {title: '', receiver: '', errors: []}
    });
  }
});
