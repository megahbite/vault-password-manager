import Ember from 'ember';
import VaultApiCall from 'vault-password-manager/services/vault-api-call';

export default VaultApiCall.extend({
  isInitialized: function() {
    return Ember.$.getJSON(`${this.get('apiPath')}sys/init`).then(function(response) {
      return response.initialized;
    });
  },

  initialize: function(shares, threshold) {
    return Ember.$.ajax(`${this.get('apiPath')}sys/init`, {
      data: JSON.stringify({'secret_shares': Number(shares), 'secret_threshold': Number(threshold)}),
      dataType: 'json',
      method: 'put',
      contentType: 'application/json',
      processData: false
    });
  }
});
