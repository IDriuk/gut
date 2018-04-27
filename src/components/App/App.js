import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="position-relative">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
