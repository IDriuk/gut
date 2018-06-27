import { combineReducers } from 'redux';
import PinnedReposReducer from './pinned_repos_reducer';
import NavCategoriesCountsReducer from './nav_categories_counts_reducer';
import SuggestionsReducer from './suggestions_reducer';

const rootReducer = combineReducers({
  pinnedRepos: PinnedReposReducer,
  navCategoriesCounts: NavCategoriesCountsReducer,
  suggestions: SuggestionsReducer
});

export default rootReducer;
