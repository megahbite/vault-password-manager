import Ember from 'ember';

export default Ember.Component.extend({
  vaultUnsealer: Ember.inject.service('vaultUnsealer'),
  actions: {
    unsealVault() {
      var component = this;
      component.get('vaultUnsealer').unseal(component.get('key')).then(
        function() {},
        function(response) {
          component.set('error', response.responseJSON.errors.join('<br>'));
        }
      );
    },
    resetUnseal() {
      debugger;
    }
  }
});
