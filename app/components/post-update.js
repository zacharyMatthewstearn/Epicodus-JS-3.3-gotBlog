import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePost(post) {
      var params = {
        title: this.get('title'),
        subtitle: this.get('subtitle'),
        author: this.get('author'),
        date: this.get('date'),
        snippet: (this.get('content').splice(0,100) + "..."),
        content: this.get('content'),
        image: this.get('image')
      };
      this.sendAction('updaterOpen', false);
      this.sendAction('update', post, params);
    }
  }
});
