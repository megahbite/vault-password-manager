import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:initialize', 'Unit | Controller | initialize', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('calling didInitialize sets the keys property', function(assert) {
  assert.expect(2);
  let ctx = this.subject();

  assert.ok(typeof ctx.get('keys') === 'undefined');

  ctx.send('didInitialize', {test: 'test'});

  assert.deepEqual(ctx.get('keys'), {test: 'test'});
});
