import Ember from 'ember';
import VaultStateCheckMixin from 'vault-password-manager/mixins/vault-state-check-mixin';

export default Ember.Route.extend(VaultStateCheckMixin, {
  vaultSecrets: Ember.inject.service(),
  model(params) {
    return this.get('vaultSecrets').getSecret(params.key).then((data) => {
      return Object.keys(data.data).map((key) => { return [key, data.data[key]]; });
    });
  }
});
