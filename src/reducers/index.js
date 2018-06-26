import { combineReducers } from 'redux';
import PinnedReposReducer from './pinned_repos_reducer';

const rootReducer = combineReducers({
  pinnedRepos: PinnedReposReducer
});

export default rootReducer;
