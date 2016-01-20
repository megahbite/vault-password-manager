import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    didInitialize(keys) {
      this.set('keys', keys);
      Ember.$('#key-modal').addClass('modal-open');
      Ember.$('body').addClass('modal-open');
    },
    keysViewed() {
      this.get('session').authenticate('authenticator:root-token', this.get('keys').root_token);
      this.transitionToRoute('unseal');
    }
  }
});
