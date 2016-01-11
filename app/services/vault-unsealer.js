import Ember from 'ember';
import VaultApiCall from 'vault-password-manager/services/vault-api-call';

export default VaultApiCall.extend({
  sealStatus() {
    return Ember.$.getJSON(this.get('apiPath') + 'sys/seal-status');
  },
  unseal(key) {
    return this.get('apiCall')(`${this.get('apiPath')}sys/unseal`, {key: key});
  },
  resetUnseal() {
    /* This won't work until https://github.com/hashicorp/vault/issues/920 is fixed */
    //return this.get('apiCall')(`${this.get('apiPath')}sys/unseal`, {reset: true});
  }
});
