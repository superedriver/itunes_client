import {faker} from 'ember-cli-mirage';

export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);

  const artists = server.createList('artist', 10);

  artists.forEach(artist => {
    server.createList('album', faker.random.number(10), {artistId: artist.id});
  });
}
