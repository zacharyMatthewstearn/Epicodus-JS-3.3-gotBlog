import Ember from 'ember';

export default Ember.Component.extend({
  formattedContent: Ember.computed('post', function() {
    return Ember.String.htmlSafe(this.get('post.content'));
  }),
});
