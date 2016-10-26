import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post-expand', {path:'/post/:post_id'});
  this.route('post-add');
});

export default Router;
