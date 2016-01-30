import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['secret-item'],
  passwordShown: false,
  passwordType: Ember.computed('passwordShown', function() {
    return this.get('passwordShown') ? 'text' : 'password';
  }),
  actions: {
    selectUsername() {
      let $input = Ember.$('.username input');
      $input.on("click.a keyup.a", () => {
        $input.off("click.a keyup.a").select();
      });
    },
    selectPassword() {
      if (!this.get('passwordShown')) { return; }
      let $input = Ember.$('.password input');
      $input.on("click.a keyup.a", () => {
        $input.off("click.a keyup.a").select();
      });
    },
    revealPassword() {
      if (this.get('passwordShown')) {
        this.set('passwordShown', false);
      } else {
        this.set('passwordShown', true);
      }
    }
  }
});
