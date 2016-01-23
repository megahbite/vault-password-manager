import Ember from 'ember';
import VaultApiCall from 'vault-password-manager/services/vault-api-call';

export default VaultApiCall.extend({
  isInitialized: function() {
    return Ember.$.getJSON(`${this.get('apiPath')}sys/init`).then(function(response) {
      return response.initialized;
    });
  },

  initialize: function(shares, threshold) {
    return this.get('apiPut')(`${this.get('apiPath')}sys/init`, {
      'secret_shares': Number(shares),
      'secret_threshold': Number(threshold)
    });
  }
});
