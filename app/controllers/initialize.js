import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    didInitialize() {
      this.transitionToRoute('index');
    }
  }
});
