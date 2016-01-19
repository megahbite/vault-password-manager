import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

var mockSession = Ember.Service.extend({});

moduleFor('controller:initialize', 'Unit | Controller | initialize', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  beforeEach() {
    this.registry.register('service:session', mockSession);
  }
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

test('calling keysViewed sets the session correctly', function(assert) {
  assert.expect(4);
  let ctx = this.subject();
  ctx.transitionToRoute = Ember.K; // Stub the route transition function
  ctx.set('keys', {root_token: 'abc123'});
  assert.ok(typeof ctx.get('session').get('token') === 'undefined', "token isn't set");
  assert.ok(typeof ctx.get('session').get('isRoot') === 'undefined', "isRoot isn't set");
  ctx.send('keysViewed');

  assert.equal(ctx.get('session').get('token'), 'abc123');
  assert.equal(ctx.get('session').get('isRoot'), true);
});
