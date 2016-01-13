import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

var mockInitializerService = Ember.Service.extend({
  initialize() {
    return new Ember.RSVP.Promise(function (resolve) {
      resolve('test');
    });
  }
});

moduleForComponent('vault-initializer', 'Integration | Component | vault initializer', {
  integration: true,

  beforeEach() {
    this.registry.register('service:vault-initializer', mockInitializerService);
  }
});

test('it renders errors', function(assert) {
  this.set('error', 'This is an error');

  this.render(hbs`{{vault-initializer error=error}}`);

  assert.equal(this.$('.flash-error').text().trim(), 'This is an error');
});

test('it calls the onInitialize callback', function(assert) {
  this.set('callback', function(response) { assert.equal(response, 'test'); });

  this.render(hbs`{{vault-initializer onInitialize=(action callback)}}`);

  this.$('input[type=submit]').click();
});
