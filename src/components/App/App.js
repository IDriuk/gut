import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="position-relative">
          <Header />
        </div>

        <Main />
      </div>
    );
  }
}

export default App;
