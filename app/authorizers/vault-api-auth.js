import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

const { isEmpty } = Ember;

export default Base.extend({
  authorize(data, block) {
    const token = data['token'];
    if (!isEmpty(token)) {
      block('X-Vault-Token', token);
    }
  }
});
