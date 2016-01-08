import Ember from 'ember';
import VaultStateCheckMixinMixin from '../../../mixins/vault-state-check-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | vault state check mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var VaultStateCheckMixinObject = Ember.Object.extend(VaultStateCheckMixinMixin);
  var subject = VaultStateCheckMixinObject.create();
  assert.ok(subject);
});
