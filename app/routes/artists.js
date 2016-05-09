import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('artist');
  },

  actions: {
    findAlbums(artistId) {
      console.log("=================================");
      console.log("=================================");
      console.log("=================================");
      console.log(artistId);
      this.transitionTo('about');
    }
  }
});
