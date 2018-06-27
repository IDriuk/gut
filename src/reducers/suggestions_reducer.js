import { FETCH_SUGGESTIONS } from '../actions';

export default function(state = [], action) {

  switch(action.type) {
    case FETCH_SUGGESTIONS :
      return action.payload;
    default:
      return state;
  }
}
