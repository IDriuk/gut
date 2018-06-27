import React from 'react';
import ReactDOM from 'react-dom';
import ContributionGraph from './ContributionGraph';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContributionGraph />, div);
  ReactDOM.unmountComponentAtNode(div);
});
