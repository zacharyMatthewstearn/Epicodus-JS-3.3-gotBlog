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
    openUpdater2() {
      // console.log(this.updaterOpen);
      this.set('updaterOpen', true);
      // console.log(this.updaterOpen);
    },
    closeUpdater2() {
      // console.log(this.updaterOpen);
      this.set('updaterOpen', false);
      // console.log(this.updaterOpen);
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key, params[key]);
        }
        // else {
        //   post.set(key, "fuck off");
        // }
      });
      post.save();
      // this.transitionTo('index');
    }
  }
});
