import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  title: attr('string'),
  category: attr('string'),
  description: attr('string'),
  url: attr('string'),
  completed: attr('boolean')
});
