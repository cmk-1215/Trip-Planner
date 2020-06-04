import { FETCH_PARK, FETCH_CAMPSITE, FETCH_EVENTS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PARK:
      return action.payload.data.data[0];
    default:
      return state;
  }
}
