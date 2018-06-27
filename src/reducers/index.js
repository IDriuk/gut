import { combineReducers } from 'redux';
import PinnedReposReducer from './pinned_repos_reducer';
import NavCategoriesCountsReducer from './nav_categories_counts_reducer';

const rootReducer = combineReducers({
  pinnedRepos: PinnedReposReducer,
  navCategoriesCounts: NavCategoriesCountsReducer
});

export default rootReducer;
