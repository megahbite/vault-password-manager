import Ember from 'ember';

export default Ember.Route.extend({
  vaultUnsealer: Ember.inject.service('vaultUnsealer'),
  model() {
    return this.get('vaultUnsealer').sealStatus();
  }
});
