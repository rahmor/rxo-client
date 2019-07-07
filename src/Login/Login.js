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
      demoUserName: '',
      demoPassword: ''
    };
  }

  componentDidMount() {
    let demoUser = this.props.location.user || {};
    this.setState({
      demoUserName: demoUser.username,
      demoPassword: demoUser.password
    });
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target;
    ApiService.postLogin(username.value, password.value)
      .then(response => {
        AuthService.setToken(response.authToken);
        return response;
      })
      .then(response => {
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
            <h3>Log In</h3>
            <form
              className='login-form'
              onSubmit={event => this.handleLoginSubmit(event)}
            >
              <div>
                <label className='login-input' htmlFor='username'>
                  Username*
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  minLength='3'
                  maxLength='25'
                  required
                />
              </div>
              <br />
              <br />
              <div>
                <label className='login-input' htmlFor='password'>
                  Password*
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  minLength='3'
                  maxLength='25'
                  required
                />
              </div>
              <p>* = required</p>
              <div role='alert'>
                {this.state.error && (
                  <p style={{ color: 'red' }}>{this.state.error}</p>
                )}
              </div>
              <br />
              <br />
              <input className='login-submit' type='submit' value='LogIn' />
            </form>
            {this.state.demoUserName && (
              <div>
                <p style={{ color: 'green' }}>{`Demo User Name: ${
                  this.state.demoUserName
                }`}</p>
                <p style={{ color: 'green' }}>{`Demo Password: ${
                  this.state.demoPassword
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
