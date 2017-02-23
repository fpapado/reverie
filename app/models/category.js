import DS from 'ember-data';

const {attr, belongsTo, Model} = DS;

export default Model.extend({
  title: attr('string'),
  imgurl: attr('string'),
  sticker: belongsTo('sticker')
});
