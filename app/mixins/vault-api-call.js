import Ember from 'ember';
import ENV from 'vault-password-manager/config/environment';

export default Ember.Mixin.create({
  vaultHost: ENV.APP.vaultHost,
  vaultAPIVersion: ENV.APP.vaultAPIVersion,
  session: Ember.inject.service(),
  apiPath: Ember.computed('vaultHost', 'vaultAPIVersion', function() {
    return `${this.get('vaultHost')}/${this.get('vaultAPIVersion')}`;
  }),
  apiGet(object, endpoint, authorized=false) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax(`${object.get('apiPath')}/${endpoint}`, object.get('_buildOptions')(object, 'get', resolve, reject, authorized));
    });
  },
  apiDelete(object, endpoint, authorized=false) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax(`${object.get('apiPath')}/${endpoint}`, object.get('_buildOptions')(object, 'delete', resolve, reject, authorized));
    });
  },
  apiPut(object, endpoint, data, authorized=false) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax(`${object.get('apiPath')}/${endpoint}`, object.get('_buildOptions')(object, 'put', resolve, reject, authorized, data));
    });
  },
  _authorizationHeaders(object) {
    let headers = {};
    object.get('session').authorize('authorizer:vault-api-auth', (headerName, headerValue) => {
      headers[headerName] = headerValue;
    });
    return headers;
  },
  _buildOptions(object, method, resolve, reject, authorized, data=null) {
    let options = {
      dataType: 'json',
      method: method,
      contentType: 'application/json',
      success: resolve,
      error: reject,
    };
    if (data) {
      options["data"] = JSON.stringify(data);
      options["processData"] = false;
      options["contentType"] = 'application/json';
    }
    if (authorized) {
      options["headers"] = object.get('_authorizationHeaders')(object);
    }
    return options;
  }
});
