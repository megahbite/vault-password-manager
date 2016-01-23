import Ember from 'ember';
import VaultApiCall from 'vault-password-manager/services/vault-api-call';

export default VaultApiCall.extend({
  session: Ember.inject.service(),
  lookup(token) {
    return this.get('authorizedApiGet')(`${this.get('apiPath')}auth/token/lookup/${token}`, this.get('session'));
  },
  lookupSelf() {
    return this.get('authorizedApiGet')(`${this.get('apiPath')}auth/token/lookup-self`, this.get('session'));
  }
});
