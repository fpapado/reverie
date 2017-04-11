import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  _loadedStickers: [],

  stickers: computed('model.loadTask.{isFinished,value}', '_loadedStickers',
    function() {
      if (this.get('model.loadTask.isFinished')) {
        return this.get('model.loadTask.value');
      } else {
        return this.get('_loadedStickers');
      }
    }
  ),

  isLoadingStickers: computed.readOnly('model.loadTask.isRunning')
});
