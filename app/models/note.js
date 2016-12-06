import DS from 'ember-data';
import Model from 'ember-pouch/model';

const { attr } = DS;

export default Model.extend({
  title: attr('string'),
  author: attr('string'),
  category: attr('string'),
  content: attr('string')
});
