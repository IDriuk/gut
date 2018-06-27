import {
  pinnedRepos,
  navCategoriesCounts,
  suggestions
} from './data';

export const FETCH_PINNED_REPOS = 'fetch_posts';
export const FETCH_NAV_CATEGORIES_COUNTS = 'fetch_nav_categories_counts';
export const FETCH_SUGGESTIONS = 'fetch_suggestions';

export function fetchPinnedRepos() {

  return {
    type: FETCH_PINNED_REPOS,
    payload: pinnedRepos
  };
}

export function fetchNavCategoriesCounts() {

  return {
    type: FETCH_NAV_CATEGORIES_COUNTS,
    payload: navCategoriesCounts
  }
}

export function fetchSuggestions() {

  return {
    type: FETCH_SUGGESTIONS,
    payload: suggestions
  }
}
