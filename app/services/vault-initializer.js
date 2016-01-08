import Ember from 'ember';
import ENV from 'vault-password-manager/config/environment';

export default Ember.Service.extend({
  vaultHost: ENV.APP.vaultHost,
  vaultAPIVersion: ENV.APP.vaultAPIVersion,
  apiPath: Ember.computed('vaultHost', 'vaultAPIVersion', function() {
    return this.get('vaultHost') + '/' + this.get('vaultAPIVersion') + '/';
  }),

  isInitialized: function() {
    return Ember.$.getJSON(this.get('apiPath') + 'sys/init').then(function(response) {
      return response.initialized;
    });
  }
});
