import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists');
  this.route('about');

  this.route('artist', function() {
    this.route('albums');
  });
});

export default Router;
