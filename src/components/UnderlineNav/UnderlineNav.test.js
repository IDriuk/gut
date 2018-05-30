import React from 'react';
import ReactDOM from 'react-dom';
import UnderlineNav from './UnderlineNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnderlineNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
