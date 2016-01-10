import Ember from 'ember';
import VaultApiCall from 'vault-password-manager/services/vault-api-call';

export default VaultApiCall.extend({
  sealStatus: function() {
    return Ember.$.getJSON(this.get('apiPath') + 'sys/seal-status');
  }
});
