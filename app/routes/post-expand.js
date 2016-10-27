import Ember from 'ember';

export default Ember.Route.extend({
  updaterOpen: false,
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    beheadPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },
    openUpdater2(post) {
      // console.log(this.updaterOpen);
      this.set('updaterOpen', true);
      // console.log(this.updaterOpen);
    },
    closeUpdater2(post) {
      // console.log(this.updaterOpen);
      this.set('updaterOpen', false);
      // console.log(this.updaterOpen);
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key, params[key]);
          // if(key==="content") {
          //   post.set(snippet, (this.get('content').slice(0, 100) + "..."));
          // }
        }
      });
      post.save();
      // this.transitionTo('index');
    }
  }
});
