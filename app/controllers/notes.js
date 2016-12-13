import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Controller, inject } = Ember;

export default Controller.extend({
  notify: inject.service('notify'),

  createNote: task(function* () {
    let notify = this.get('notify');
    let note = this.get('store').createRecord('note', {
      title: this.get('note-title'),
      author: this.get('note-author'),
      category: this.get('note-category'),
      content: this.get('note-content')
    });

    yield note.save();

    notify.info('Note saved!');
    this.set('note-title', '');
    this.set('note-author', '');
    this.set('note-category', '');
    this.set('note-content', '');

    this.transitionToRoute('notes');
  }).drop()
});
