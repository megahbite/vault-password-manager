import Ember from 'ember';
import ENV from 'vault-password-manager/config/environment';

/* Base service for all API calls to vault */
export default Ember.Service.extend({
  vaultHost: ENV.APP.vaultHost,
  vaultAPIVersion: ENV.APP.vaultAPIVersion,
  apiPath: Ember.computed('vaultHost', 'vaultAPIVersion', function() {
    return `${this.get('vaultHost')}/${this.get('vaultAPIVersion')}/`;
  })
});
