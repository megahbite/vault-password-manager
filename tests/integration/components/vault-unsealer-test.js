import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

var mockSealedUnsealerService = Ember.Service.extend({
  unseal() {
    return new Ember.RSVP.Promise(function (resolve) {
      resolve({sealed: true, t: 99, progress: 97});
    });
  },

  resetUnseal() {
    return new Ember.RSVP.Promise(function (resolve) {
      resolve({sealed: true, t: 99, progress: 0});
    });
  }
});

var mockUnsealedUnsealerService = Ember.Service.extend({
  unseal() {
    return new Ember.RSVP.Promise(function (resolve) {
      resolve({sealed: false});
    });
  },

  resetUnseal() {
    return new Ember.RSVP.Promise(function (resolve) {
      resolve({t: 0, progress: 0});
    });
  }
});

moduleForComponent('vault-unsealer', 'Integration | Component | vault unsealer', {
  integration: true,
});

test('it renders errors', function(assert) {
  this.set('error', 'This is an error');

  this.render(hbs`{{vault-unsealer error=error}}`);

  assert.equal(this.$('.flash-error').text().trim(), 'This is an error');
});

test('it tries to unseal the sealed vault', function (assert) {
  this.registry.register('service:vault-unsealer', mockSealedUnsealerService);

  this.render(hbs`{{vault-unsealer}}`);

  this.$('input[type=submit]').click();

  assert.equal(this.$('.unlock-progress').text(), '97 keys have been provided.');
  assert.equal(this.$('.unlock-threshold').text(), '99 keys are needed to unlock.');
});

test('it calls back to the controller when unsealed', function(assert) {
  assert.expect(1);
  this.registry.register('service:vault-unsealer', mockUnsealedUnsealerService);

  this.set('callback', function() { assert.ok(true); });

  this.render(hbs`{{vault-unsealer onUnseal=(action callback)}}`);

  this.$('input[type=submit]').click();
});

test('it tries to reset the vault', function(assert) {
  this.registry.register('service:vault-unsealer', mockSealedUnsealerService);

  this.render(hbs`{{vault-unsealer}}`);

  this.$('button.reset-button').click();

  assert.equal(this.$('.unlock-progress').text(), '0 keys have been provided.');
  assert.equal(this.$('.unlock-threshold').text(), '99 keys are needed to unlock.');
});
