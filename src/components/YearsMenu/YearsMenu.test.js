import React from 'react';
import ReactDOM from 'react-dom';
import YearsMenu from './YearsMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YearsMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
