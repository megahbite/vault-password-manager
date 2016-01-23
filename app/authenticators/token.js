import Base from 'ember-simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({
  restore(data) {
    return new Ember.RSVP.Promise(function(resolve) { resolve({ token: data['token'] }); });
  },
  authenticate(options) {
    return new Ember.RSVP.Promise(function(resolve) {
      resolve({ token: options['token'] });
    });
  }
});
