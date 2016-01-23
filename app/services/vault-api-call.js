import Ember from 'ember';
import ENV from 'vault-password-manager/config/environment';

/* Base service for all API calls to vault */
export default Ember.Service.extend({
  vaultHost: ENV.APP.vaultHost,
  vaultAPIVersion: ENV.APP.vaultAPIVersion,
  apiPath: Ember.computed('vaultHost', 'vaultAPIVersion', function() {
    return `${this.get('vaultHost')}/${this.get('vaultAPIVersion')}/`;
  }),
  apiPut(endpoint, data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax(`${endpoint}`, {
        data: JSON.stringify(data),
        dataType: 'json',
        method: 'put',
        contentType: 'application/json',
        processData: false,
        success: resolve,
        error: reject
      });
    });
  },
  authorizedApiPut(endpoint, data, session) {
    let headers = {};
    session.authorize('authorizer:vault-api-auth', (headerName, headerValue) => {
      headers[headerName] = headerValue;
    });

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax(`${endpoint}`, {
        data: JSON.stringify(data),
        dataType: 'json',
        method: 'put',
        contentType: 'application/json',
        processData: false,
        success: resolve,
        error: reject,
        headers: headers
      });
    });
  },
  authorizedApiGet(endpoint, session) {
    let headers = {};
    session.authorize('authorizer:vault-api-auth', (headerName, headerValue) => {
      headers[headerName] = headerValue;
    });

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax(`${endpoint}`, {
        dataType: 'json',
        method: 'get',
        success: resolve,
        error: reject,
        headers: headers
      });
    });
  }
});
