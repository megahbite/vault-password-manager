import Ember from 'ember';

export default Ember.Component.extend({

  vaultInitializer: Ember.inject.service('vaultInitializer'),

  actions: {
    initializeVault() {
      var component = this;
      component.get('vaultInitializer').initialize(component.get('shares'), component.get('threshold')).then(
        function() {
          component.get('onInitialize')();
        },
        function(response) {
          component.set('error', response.responseText);
        }
      );
    }
  }


});
