import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    didInitialize(keys) {
      this.set('keys', keys);
      Ember.$('#key-modal').addClass('modal-open');
      Ember.$('body').addClass('modal-open');
    },
    keysViewed() {
      this.transitionToRoute('unseal');
    }
  }
});
