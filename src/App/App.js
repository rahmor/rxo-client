import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import AddPrescription from '../AddPrescription/AddPrescription';
import Dashboard from '../Dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard/:id' component={Dashboard} />
        <Route path='/addprescription' component={AddPrescription} />
      </div>
    );
  }
}

export default App;
