import DS from 'ember-data';

const {attr, Model} = DS;

export default Model.extend({
  title: attr('string'),
  imgurl: attr('string')
});
