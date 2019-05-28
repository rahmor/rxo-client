import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import ApiService from '../services/api-services';
import './Login.css';
class Login extends Component {
  handleLoginSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target;
    ApiService.postLogin(username.value, password.value).then(response =>
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
          <form onSubmit={event => this.handleLoginSubmit(event)}>
            <input type='text' name='username' placeholder='Name' />
            <br />
            <br />
            <input type='text' name='password' placeholder='Password' />
            <br />
            <br />
            <input type='submit' value='LogIn' />
          </form>
        </main>
      </>
    );
  }
}

export default Login;
