import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import './App.css';

class App extends Component {
  render() {
    return <Route path='/' component={LandingPage} />;
  }
}

export default App;
