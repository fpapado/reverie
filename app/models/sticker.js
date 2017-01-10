import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  title: attr('string'),
  sender: belongsTo('user', {inverse: null}),
  receiver: belongsTo('user')
});
