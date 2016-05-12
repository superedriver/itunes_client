import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV            from 'tunes-client/config/environment';

export default JSONAPIAdapter.extend({
  namespace: 'api/v1',
  host:      `http://localhost:${ENV.port}`
});
