import React from 'react';
import ReactDOM from 'react-dom';
import ContributionActivity from './ContributionActivity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContributionActivity />, div);
  ReactDOM.unmountComponentAtNode(div);
});
