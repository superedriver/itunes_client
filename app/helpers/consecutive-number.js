import Ember from 'ember';

export function consecutiveNumber(params/*, hash*/) {
  return ++params[0];
}

export default Ember.Helper.helper(consecutiveNumber);
