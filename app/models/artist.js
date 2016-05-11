import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  itunes_id: attr('number'),
  albums_count: attr('number'),
  albums: hasMany('album', { async: true })
});
