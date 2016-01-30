import Ember from 'ember';
import { moduleFor } from 'ember-qunit';
import test from 'vault-password-manager/tests/ember-sinon-qunit/test';



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

test('calling keysViewed authenticates the session', function(assert) {
  const mockSession = Ember.Service.extend({
    authenticate() {
      assert.ok(true);
    },
    data: {
    }
  });

  assert.expect(2);

  this.register('service:session', mockSession);
  let ctx = this.subject();
  ctx.set('keys', {root_token: 'abc'});
  this.stub(ctx, 'transitionToRoute');

  ctx.send('keysViewed');

  assert.ok(ctx.transitionToRoute.calledWith('unseal'));
});
