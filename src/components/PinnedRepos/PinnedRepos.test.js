import React from 'react';
import ReactDOM from 'react-dom';
import PinnedRepos from './PinnedRepos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PinnedRepos />, div);
  ReactDOM.unmountComponentAtNode(div);
});
