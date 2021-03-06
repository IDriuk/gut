import React from 'react';
import ReactDOM from 'react-dom';
import PinnedRepos from './PinnedRepos';
import { pinnedRepos } from '../../actions/data';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PinnedRepos pinnedRepos={pinnedRepos}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
