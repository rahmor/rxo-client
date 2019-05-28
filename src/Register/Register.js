import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import ApiService from '../services/api-services';
import './Register.css';

class Register extends Component {
  handleRegistrationSubmit = event => {
    event.preventDefault();
    const { username, password } = event.taget;
    ApiService.postRegistration(username, password).then(response =>
      console.log(response)
    );
  };

  render() {
    return (
      <>
        <header>
          <Heading />
        </header>
        <main>
          <p>Register for the site</p>
          <form onSubmit={event => this.handleRegistrationSubmit(event)}>
            <input type='text' name='username' placeholder='Name' />
            <br />
            <br />
            <input type='text' name='password' placeholder='Password' />
            <br />
            <br />
            <input type='submit' value='Register' />
          </form>
        </main>
      </>
    );
  }
}

export default Register;
