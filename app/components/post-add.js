import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    savePost() {
      var params = {
        title: this.get('title'),
        subtitle: this.get('subtitle'),
        author: this.get('author'),
        date: this.get('date'),
        image: this.get('image'),
        content: this.get('content')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
