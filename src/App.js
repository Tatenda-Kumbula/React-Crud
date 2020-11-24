import React, { Component } from 'react';
import GitHub from './GitHub';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {        
    return (
      <div>
        <Header />        
      </div>
    );
  }
}

export default App;
