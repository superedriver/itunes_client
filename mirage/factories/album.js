import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name () { return faker.lorem.words(3).join(' ');}
});
