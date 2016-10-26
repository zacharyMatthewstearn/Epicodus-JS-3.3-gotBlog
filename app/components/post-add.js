import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    savePost() {
      var params = {
        title: this.get('title'),
        subtitle: this.get('subtitle'),
        author: this.get('author'),
        content: this.get('content'),
        snippet: this.get('content').slice(0, 100) + "...",
        image: this.get('image')
        // timestamp: moment().format('LLL')
      };
      console.log(params);



      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
