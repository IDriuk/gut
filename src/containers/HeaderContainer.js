import { connect } from 'react-redux';
import { fetchSuggestions } from '../actions';
import Header from '../components/Header/Header';

function mapStateToProps({ suggestions }) {
  return { suggestions };
}

export default connect(mapStateToProps, { fetchSuggestions })(Header);
