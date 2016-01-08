import Ember from 'ember';

export default Ember.Mixin.create({
  vaultInitializer: Ember.inject.service('vaultInitializer'),
  vaultUnsealer: Ember.inject.service('vaultUnsealer'),

  beforeModel: function() {
    var mixin = this;
    mixin.get('vaultInitializer').isInitialized().then(function(state) {
      if (state) {
        mixin.get('vaultUnsealer').isSealed().then(function(seal_state) {
          Ember.Logger.log('Is the vault sealed?', seal_state);
          if (seal_state) {
            mixin.transitionTo('unseal');
          }
        });
      } else {
        mixin.transitionTo('initialize');
      }
    });
  }
});
