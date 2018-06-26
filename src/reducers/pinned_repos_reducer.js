import { FETCH_PINNED_REPOS } from '../actions';

export default function(state = [], action) {
  
  switch(action.type) {
    case FETCH_PINNED_REPOS :
      return action.payload;
    default:
      return state;
  }
}
