import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import ApiService from '../services/api-services';
import AuthService from '../services/auth-service';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    let demoUser = this.props.location.user || {};
    this.setState({ username: demoUser.username, password: demoUser.password });
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target;
    ApiService.postLogin(username.value, password.value)
      .then(response => {
        AuthService.setToken(response.authToken);
        const id = AuthService.getIdFromToken(response.authToken);
        return id;
      })
      .then(id => this.props.history.replace(`/dashboard/${id}`))
      .catch(response => this.setState({ error: response.error }));
  };

  render() {
    return (
      <>
        <Heading />
        <div className='login-container'>
          <main role='main'>
            <form
              className='login-form'
              onSubmit={event => this.handleLoginSubmit(event)}
            >
              <label className='login-input' htmlFor='username'>
                Name
              </label>
              <input type='text' id='username' name='username' />
              <br />
              <br />
              <label className='login-input' htmlFor='password'>
                Password
              </label>
              <input type='password' id='password' name='password' />
              <div role='alert'>
                {this.state.error && (
                  <p style={{ color: 'red' }}>{this.state.error}</p>
                )}
              </div>
              <br />
              <br />
              <input className='login-submit' type='submit' value='LogIn' />
            </form>
            {this.state.username && (
              <div>
                <p style={{ color: 'green' }}>{`Demo User Name: ${
                  this.state.username
                }`}</p>
                <p style={{ color: 'green' }}>{`Demo password: ${
                  this.state.password
                }`}</p>
              </div>
            )}
          </main>
        </div>
      </>
    );
  }
}

export default Login;
