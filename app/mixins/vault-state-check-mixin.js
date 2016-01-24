import Ember from 'ember';

export default Ember.Mixin.create({
  vaultInitializer: Ember.inject.service('vaultInitializer'),
  vaultUnsealer: Ember.inject.service('vaultUnsealer'),

  beforeModel: function() {
    var mixin = this;
    mixin.get('vaultInitializer').isInitialized().then(function(state) {
      if (state) {
        mixin.get('vaultUnsealer').sealStatus().then(function(seal_state) {
          if (seal_state.sealed) {
            mixin.transitionTo('unseal');
          }
        });
      } else {
        mixin.transitionTo('initialize');
      }
    });
  }
});
