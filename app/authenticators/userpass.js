import Base from 'ember-simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({
  vaultUserpass: Ember.inject.service(),
  restore(data) {
    return new Ember.RSVP.Promise(function(resolve) { resolve({ token: data['token'] }); });
  },

  authenticate(options) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('vaultUserpass').login(options['username'], options['password']).then((response) => {
        resolve({token: response.auth.client_token});
      }, (response) => {
        reject(response);
      });
    });
  }
});
