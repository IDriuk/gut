import { connect } from 'react-redux';
import { fetchPinnedRepos } from '../actions';
import PinnedRepos from '../components/PinnedRepos/PinnedRepos';

function mapStateToProps({ pinnedRepos }) {
  return { pinnedRepos };
}

export default connect(mapStateToProps, { fetchPinnedRepos })(PinnedRepos);
