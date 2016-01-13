import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vault-unsealer', 'Integration | Component | vault unsealer', {
  integration: true
});

test('it renders errors', function(assert) {
  this.set('error', 'This is an error');

  this.render(hbs`{{vault-unsealer error=error}}`);

  assert.equal(this.$('.flash-error').text().trim(), 'This is an error');
});
