import { connect } from 'react-redux';
import { fetchNavCategoriesCounts } from '../actions';
import UnderlineNav from '../components/UnderlineNav/UnderlineNav';

function mapStateToProps({ navCategoriesCounts }) {
  return { navCategoriesCounts };
}

export default connect(mapStateToProps, { fetchNavCategoriesCounts })(UnderlineNav);
