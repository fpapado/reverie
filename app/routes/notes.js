import Ember from 'ember';

const { Route } = Ember;

let notes = [
  {
    id: 'my-first-teambuilding',
    title: 'My first Teambuilding',
    author: 'Fotis Papado',
    category: 'teambuilding',
    content: 'OMG Amazing'
  },
  {
    id: 'my-first-commitee-work',
    title: 'My first Committee Work',
    author: 'Fotis Papado',
    category: 'committeework',
    content: 'Be the change you want to see in the world.'
  },
  {
    id: 'party-time',
    title: 'Party time',
    author: 'Fotis Papado',
    category: 'evening',
    content: 'Whoo, partay!'
  }
];

export default Route.extend({
  model() {
    return notes;
  }
});
