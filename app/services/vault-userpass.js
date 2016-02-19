import Ember from 'ember';
import VaultApiCall from 'vault-password-manager/mixins/vault-api-call';

export default Ember.Service.extend(VaultApiCall, {
  login(username, password) {
    return this.get('apiPut')(this, `auth/userpass/login/${username}`, { password: password });
  }
});
