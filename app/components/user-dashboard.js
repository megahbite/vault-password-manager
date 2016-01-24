import Ember from 'ember';

export default Ember.Component.extend({
  vaultUnsealer: Ember.inject.service(),
  actions: {
    sealVault() {
      this.get('vaultUnsealer').seal().then(() => {
        this.get('onVaultSealed')();
      });
    }
  }
});
