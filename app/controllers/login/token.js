import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  vaultToken: Ember.inject.service(),

  actions: {
    loginToken() {
      let controller = this;
      this.get('session').authenticate('authenticator:token', {token: this.get('token')}).then(() => {
        this.get('vaultToken').lookupSelf().then((data) => {
          if (Ember.$.inArray('root', data.data.policies) !== -1) {
            controller.get('session').set('data.isRoot', true);
          }

          controller.transitionToRoute('index');
        },
        (response) => {
          controller.set('error', `Log in failed: ${response.responseJSON.errors.join('<br>')}`);
        });
      }).finally(() => { controller.set('token', ''); });
    }
  }
});
