import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

var mockUnsealService = Ember.Service.extend({
  seal() {
    return new Ember.RSVP.Promise((resolve) => { resolve(); });
  }
});

moduleForComponent('user-dashboard', 'Integration | Component | user dashboard', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{user-dashboard}}`);

  assert.equal(this.$().text().trim(), 'Seal Vault');
});

test('it seals the vault', function(assert) {
  this.registry.register('service:vault-unsealer', mockUnsealService);
  assert.expect(1);
  this.set('callback', () => { assert.ok(true); });

  this.render(hbs`{{user-dashboard onVaultSealed=(action callback)}}`);
  this.$('.seal-vault').click();
});
