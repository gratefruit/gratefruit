import React, { Component } from 'react';

import GratefulPage from './pages/GratefulPage'
import initReactFastclick from 'react-fastclick';
initReactFastclick();

class App extends Component {

  render() {
    return (
      <GratefulPage />
    );
  }
}

export default App;
