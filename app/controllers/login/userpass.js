import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    login() {
      this.get('session').authenticate('authenticator:userpass', {username: this.get('user'), password: this.get('password')}).then(() => {
        this.set('error', null);
        this.transitionToRoute('index');
      },
      (response) => {
        this.set('error', `Log in failed: ${response.responseJSON.errors.join('<br>')}`);
      });
    }
  }
});
