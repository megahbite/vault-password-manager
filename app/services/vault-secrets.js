import Ember from 'ember';
import VaultApiCall from 'vault-password-manager/services/vault-api-call';

export default VaultApiCall.extend({
  session: Ember.inject.service(),
  list() {
    return this.get('authorizedApiGet')(`${this.get('apiPath')}secret/?list=true`, this.get('session'));
  },
  getSecret(key) {
    return this.get('authorizedApiGet')(`${this.get('apiPath')}secret/${key}`, this.get('session'));
  },
  postSecret(key, data) {
    return this.get('authorizedApiPut')(`${this.get('apiPath')}secret/${key}`, data, this.get('session'));
  },
  deleteSecret(key) {
    return this.get('authorizedApiDelete')(`${this.get('apiPath')}secret/${key}`, this.get('session'));
  }
});
