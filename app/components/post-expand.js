import Ember from 'ember';

export default Ember.Component.extend({
  updaterOpen: false,
  formattedContent: Ember.computed('post', function() {
    return Ember.String.htmlSafe(this.get('post.content'));
  }),
  actions: {
    delete(post) {
      if(confirm('Ser Ilen, bring me this post\'s head!')) {
        this.sendAction('beheadPost', post);
      }
    },
    openUpdater(post) {
      this.set('updaterOpen', true);
    },
    closeUpdater(post) {
      this.set('updaterOpen', false);
    }
  }
});
