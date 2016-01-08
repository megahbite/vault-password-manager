/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'vault-password-manager',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      vaultHost: 'https://127.0.0.1:8200',
      vaultAPIVersion: 'v1'
    },

    // contentSecurityPolicy: {
    //   'connect-src': ["'self'", "https://127.0.0.1:8200"]
    // }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.vaultHost = 'http://localhost:1337/127.0.0.1:8200';
    ENV.contentSecurityPolicy = {
      'connect-src': ["'self'", "http://localhost:1337"],
      'script-src': ["'self'", "http://localhost:1337"]
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
