import { FETCH_PARK, FETCH_CAMPSITE, FETCH_EVENTS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return //Also no idea
    default:
      return state;
  }
}
