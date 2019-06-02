import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import ApiService from '../services/api-services';
import AuthService from '../services/auth-service';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  //use history to send to dashboard
  //improve form validation/a11y
  handleLoginSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target;
    ApiService.postLogin(username.value, password.value)
      .then(response => {
        AuthService.setToken(response.authToken);
        this.props.history.replace(
          `/dashboard/:${AuthService.getIdFromToken(response.authToken)}`
        );
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
            <div role='alert'>
              {this.state.error && <p>{this.state.error}</p>}
            </div>
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
