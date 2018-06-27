import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { suggestions } from '../../actions/data';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Header
      suggestions={suggestions}
      fetchSuggestions={() => suggestions}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});
