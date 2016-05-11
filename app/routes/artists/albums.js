import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('album', {artist_id: params.artist_id})
  }
});
