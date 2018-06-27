import { FETCH_NAV_CATEGORIES_COUNTS } from '../actions';

export default function(state = [], action) {

  switch(action.type) {
    case FETCH_NAV_CATEGORIES_COUNTS :
      return action.payload;
    default:
      return state;
  }
}
