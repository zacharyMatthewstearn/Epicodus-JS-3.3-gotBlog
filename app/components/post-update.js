import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        title: this.get('title'),
        subtitle: this.get('subtitle'),
        author: this.get('author'),
        date: this.get('date'),
        image: this.get('image'),
        content: this.get('content'),
        snippet: undefined
      };
      this.sendAction('updaterOpen', false);
      this.sendAction('update', post, params);
    }
  }
});
