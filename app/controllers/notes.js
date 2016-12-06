import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    createNote() {
      let inspection = this.get('store').createRecord('note', {
        title: this.get('note-title'),
        author: this.get('note-author'),
        category: this.get('note-category'),
        content: this.get('note-content')
      });
      inspection.save();

      this.set('note-title', '');
      this.set('note-author', '');
      this.set('note-category', '');
      this.set('note-content', '');
    }
  }
});
