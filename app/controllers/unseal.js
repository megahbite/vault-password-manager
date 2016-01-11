import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    didUnseal() {
      this.transitionToRoute('index');
    }
  }
});
