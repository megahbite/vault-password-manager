import Ember from 'ember';
import ENV from 'vault-password-manager/config/environment';

export default Ember.Service.extend({
  vaultHost: ENV.APP.vaultHost,
  vaultAPIVersion: ENV.APP.vaultAPIVersion,
  apiPath: Ember.computed('vaultHost', 'vaultAPIVersion', function() {
    return this.get('vaultHost') + '/' + this.get('vaultAPIVersion') + '/';
  }),

  isSealed: function() {
    return Ember.$.getJSON(this.get('apiPath') + 'sys/seal-status').then(function(response) {
      return response.sealed;
    });
  }
});
