import RESTAdapter from 'ember-data/adapters/json-api';

export default RESTAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000'
});
