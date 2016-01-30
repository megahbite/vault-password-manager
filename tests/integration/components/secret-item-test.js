import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('secret-item', 'Integration | Component | secret item', {
  integration: true
});

test('Clicking hide/reveal on unrevealed password reveals it', function(assert) {
  this.set('passwordShown', false);

  this.render(hbs`{{secret-item passwordShown=passwordShown}}`);

  assert.equal(this.$('.password input').attr('type'), 'password');

  this.$('button.reveal').click();

  assert.equal(this.$('.password input').attr('type'), 'text');
});

test('Clicking hide/reveal on revealed password hides it', function(assert) {
  this.set('passwordShown', true);

  this.render(hbs`{{secret-item passwordShown=passwordShown}}`);

  assert.equal(this.$('.password input').attr('type'), 'text');

  this.$('button.reveal').click();

  assert.equal(this.$('.password input').attr('type'), 'password');
});
