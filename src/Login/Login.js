import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import ApiService from '../services/api-services';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  //send user to dashboard or display wrong info.
  //use history to user to history page.
  handleLoginSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target;
    ApiService.postLogin(username.value, password.value)
      .then(response => {
        username.value = '';
        password.value = '';
        this.props.history.replace('/');
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
          <form onSubmit={event => this.handleLoginSubmit(event)}>
            <input type='text' name='username' placeholder='Name' />
            <br />
            <br />
            <input type='password' name='password' placeholder='Password' />
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
