import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    createNote() {
      let note = this.get('store').createRecord('note', {
        title: this.get('note-title'),
        author: this.get('note-author'),
        category: this.get('note-category'),
        content: this.get('note-content')
      });
      note.save().then(
        this.transitionToRoute('notes'),
        () => { }
      );

      // this.set('note-title', '');
      // this.set('note-author', '');
      // this.set('note-category', '');
      // this.set('note-content', '');
    }
  }
});
