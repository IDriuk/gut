import { pinnedRepos } from './data';

export const FETCH_PINNED_REPOS = 'fetch_posts';

export function fetchPinnedRepos() {

  return {
    type: FETCH_PINNED_REPOS,
    payload: pinnedRepos
  };
}
