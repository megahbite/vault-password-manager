import Ember from 'ember';
import VaultApiCall from 'vault-password-manager/services/vault-api-call';

export default VaultApiCall.extend({
  sealStatus() {
    return Ember.$.getJSON(this.get('apiPath') + 'sys/seal-status');
  },
  unseal(key) {
    return this.get('apiPut')(`${this.get('apiPath')}sys/unseal`, {key: key});
  },
  resetUnseal() {
    return this.get('apiPut')(`${this.get('apiPath')}sys/unseal`, {reset: true});
  }
});
