import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('initialize');
  this.route('unseal');
  this.route('login', function() {
    this.route('token');
  });
  this.route('secrets', function() {
    this.route('new');
    this.route('show', {path: '/:key'});
  });
  this.route('users');
});

export default Router;
