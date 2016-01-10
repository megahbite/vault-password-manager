import Ember from 'ember';
import VaultApiCall from 'vault-password-manager/services/vault-api-call';

export default VaultApiCall.extend({
  sealStatus() {
    return Ember.$.getJSON(this.get('apiPath') + 'sys/seal-status');
  },
  unseal(key) {
    return Ember.$.ajax(`${this.get('apiPath')}sys/unseal`, {
      data: JSON.stringify({key: key}),
      dataType: 'json',
      method: 'put',
      contentType: 'application/json',
      processData: false
    });
  }
});
