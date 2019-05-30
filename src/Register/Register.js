import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import ApiService from '../services/api-services';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  handleRegistrationSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target;
    ApiService.postRegistration(username.value, password.value)
      .then(response => {
        username.value = '';
        password.value = '';
        this.props.history.replace('/login');
      })
      .catch(response => this.setState({ error: response.error }));
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
            <input type='password' name='password' placeholder='Password' />
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
