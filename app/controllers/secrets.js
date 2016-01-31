import Ember from 'ember';
const { getOwner } = Ember;

export default Ember.Controller.extend({
  vaultSecrets: Ember.inject.service(),
  actions: {
    deleteSecret(key) {
      this.get('vaultSecrets').deleteSecret(key).then(() => {
        let route = getOwner(this).lookup("route:secrets");
        route.refresh();
      });
    }
  }
});
