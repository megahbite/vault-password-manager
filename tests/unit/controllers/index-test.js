import { moduleFor } from 'ember-qunit';
import test from 'vault-password-manager/tests/ember-sinon-qunit/test';

moduleFor('controller:index', 'Unit | Controller | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('it transitions once the vault has sealed', function(assert) {
  let controller = this.subject();
  this.stub(controller, "transitionToRoute");

  controller.send('vaultSealed');

  assert.ok(controller.transitionToRoute.calledOnce);
});
