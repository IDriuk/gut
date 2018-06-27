import React from 'react';
import ReactDOM from 'react-dom';
import UnderlineNav from './UnderlineNav';
import { navCategoriesCounts } from '../../actions/data';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <UnderlineNav
      fetchNavCategoriesCounts={() => navCategoriesCounts}
      navCategoriesCounts={navCategoriesCounts}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});
