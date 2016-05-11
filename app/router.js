import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists', function() {
    this.route('albums', { path: '/:artist_id/albums' });
  });

  this.route('about');

});

export default Router;
