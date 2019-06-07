import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Heading/Heading';
import ApiService from '../services/api-services';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      login: null
    };
  }
  handleRegistrationSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target;
    ApiService.postRegistration(username.value, password.value)
      .then(response => {
        this.setState({ login: response.message });
      })
      .catch(response => this.setState({ error: response.error }));
  };

  render() {
    return (
      <div className='register-container'>
        <header>
          <Heading />
        </header>
        <main>
          <p>Register for the site</p>
          <form
            className='register-form'
            onSubmit={event => this.handleRegistrationSubmit(event)}
          >
            <label className='register-input' htmlFor='username'>
              Name
            </label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Name'
            />
            <br />
            <br />
            <label className='register-input' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
            <div role='alert'>
              {(this.state.error && <p>{this.state.error}</p>) ||
                (this.state.login && (
                  <p style={{ color: 'green' }}>
                    {this.state.login}{' '}
                    <Link style={{ color: 'green' }} to='/login'>
                      Log In
                    </Link>{' '}
                  </p>
                ))}
            </div>
            <br />
            <br />
            <input className='register-submit' type='submit' value='Register' />
          </form>
        </main>
      </div>
    );
  }
}

export default Register;
