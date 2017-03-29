import Ember from 'ember';

const {
  computed: { equal },
  Logger: { debug },
  set,
  Service
} = Ember;

export default Service.extend({
  state: 'offline',
  isOnline: equal('state', 'online'),
  isOffline: equal('state', 'offline'),

  init() {
    this._super(...arguments);
    set(this, 'state', window.navigator.onLine ? 'online' : 'offline');
    this._onOfflineHandler = () => {
      debug('Connection State: offline');
      set(this, 'state', 'offline');
    };
    this._onOnlineHandler = () => {
      debug('Connection State: online');
      set(this, 'state', 'online');
    };

    window.addEventListener('offline', this._onOfflineHandler);
    window.addEventListener('online', this._onOnlineHandler);
  },

  destroy() {
    window.removeEventListener('offline', this._onOfflineHandler);
    window.removeEventListener('online', this._onOnlineHandler);
    this._super(...arguments);
  }
});
