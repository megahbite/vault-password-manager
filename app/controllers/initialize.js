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
      this.get('session').set('token', this.get('keys').root_token);
      this.get('session').set('isRoot', true);
      this.transitionToRoute('unseal');
    }
  }
});
