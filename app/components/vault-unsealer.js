import Ember from 'ember';

export default Ember.Component.extend({
  vaultUnsealer: Ember.inject.service('vaultUnsealer'),
  progressChanged: Ember.observer('progress', () => {
    Ember.$('.unlock-progress').addClass('fadein');
    Ember.$(document).one('animationend', '.fadein', () => {
      Ember.$('.unlock-progress').removeClass('fadein');
    });
  }),
  actions: {
    unsealVault() {
      var component = this;
      component.get('vaultUnsealer').unseal(component.get('key')).then(
        function(response) {
          if (response.sealed) {
            component.set('threshold', response.t);
            component.set('progress', response.progress);
          } else {
            component.get('onUnseal')();
          }
        },
        function(response) {
          component.set('error', response.responseJSON.errors.join('<br>'));
        }
      ).finally(function() {
        component.set('key', '');
      });
    },
    resetUnseal() {
      var component = this;
      component.get('vaultUnsealer').resetUnseal().then(
        function(response) {
          component.set('threshold', response.t);
          component.set('progress', response.progress);
        },
        function(response) {
          component.set('error', response.responseJSON.errors.join('<br>'));
        }
      );
    }
  }
});
