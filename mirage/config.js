const serializeArtist =
  (artist) => ({
    id: artist.id,
    type: 'artists',
    attributes: {
      name:        artist.name,
      'itunes-id': artist.itunesId
    },
    relationships: {
      albums: {
        links: {
          related: `http://localhost:4200/api/v1/artists/${artist.id}/albums`
        }
      }
    }
  });




export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api/v1';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */

  this.get('/artists', function (schema) {
    return {
      data:
        schema
          .artist
          .all()
          .map(serializeArtist)
    };
  });

  this.get('/artists/:id', function (schema, {params: {id}}) {
    const artist = schema.artist.find(id);
    return {data: serializeArtist(artist)};
  });

  this.get('/artists/:id/albums', function (schema, {params: {id}}) {
    const albums = schema.artist.find(id).albums;
    return {
      data:
        albums
          .map(album => ({
            id: album.id,
            type: 'albums',
            attributes: {
              name: album.name
            }
          }))
    };
  });
}
