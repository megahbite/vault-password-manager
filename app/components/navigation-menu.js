import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super();
    Ember.run.schedule('afterRender', this, () => {
      Ember.$('#js-mobile-menu').unbind();
      Ember.$('#js-navigation-menu').removeClass("show");
    });
  },

  session: Ember.inject.service(),

  actions: {
    menuToggle() {
      Ember.$('#js-navigation-menu').slideToggle(() => {
        if (Ember.$('#js-navigation-menu').is(':hidden')) {
          Ember.$('#js-navigation-menu').removeAttr('style');
        }
      });
      return false;
    },
    invalidateSession() {
      this.get('session').invalidate();
      this.get('onLogout')();
    },
  }
});
