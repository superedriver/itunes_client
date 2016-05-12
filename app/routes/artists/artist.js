import Ember from 'ember';

export default Ember.Route.extend({
  model ({artistId}) {
    return Ember.RSVP.hash({
      artist: this.store.findRecord('artist', artistId)
    });
  }
});
