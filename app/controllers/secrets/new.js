import Ember from 'ember';
const { getOwner } = Ember;

export default Ember.Controller.extend({
  vaultSecrets: Ember.inject.service(),

  actions: {
    createSecret() {
      let key = this.get('name');
      let data = {
        url: this.get('url'),
        username: this.get('username'),
        password: this.get('password')
      };
      this.get('vaultSecrets').postSecret(key, data).then(() => {
        let route = getOwner(this).lookup("route:secrets");
        route.refresh();
        this.transitionToRoute('secrets');
      }, (response) => {
        this.set('error', response.responseJSON.errors.join('<br>'));
      });
    }
  }
});
