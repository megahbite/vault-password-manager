import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('initialize');
  this.route('unseal');
  this.route('login', function() {
    this.route('token');
  });
});

export default Router;
