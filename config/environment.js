/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'reverie',
    environment: environment,
    rootURL: '/',
    locationType: 'hash', // Using hash location type because it is more friendly for offline; taken from HospitalRun
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.manifest = {
    enabled: true,
    appcacheFile: '/manifest.appcache',
    excludePaths: ['index.html', 'tests/index.html', 'robots.txt', 'crossdomain.xml', 'testem.js'],
    showCreateDate: true
  };

  ENV.serviceWorker = {
    enabled: true,
    debug: true,
    excludePaths: ['index.html', 'manifest.appcache']
    // swIncludeFiles: [
    //   'node_modules/pouchdb/dist/pouchdb.js'
    // ]
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.serviceWorker.debug = false;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  // Default ember-pouch config for dev
  ENV.emberPouch = {
    localDb: 'local_pouch',
    remoteDb: 'http://localhost:5984/offline'
  };

  if (environment === 'production') {
    // ENV.emberPouch.remoteDb = 'https://fpapado.cloudant.com/reverie';
    ENV.emberPouch.remoteDb = '';
  }

  ENV.contentSecurityPolicy = {
    'connect-src': "'self' " + ENV.emberPouch.remoteDb.substring(0, ENV.emberPouch.remoteDb.indexOf('/', 9))
  };

  return ENV;
};
