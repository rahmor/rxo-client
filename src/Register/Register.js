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
      <>
        <Heading />
        <div className='register-container'>
          <main>
            <h3>Register</h3>
            <form
              className='register-form'
              onSubmit={event => this.handleRegistrationSubmit(event)}
            >
              <div>
                <label className='register-input' htmlFor='username'>
                  Username*
                </label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  minLength='3'
                  maxLength='25'
                  required
                />
              </div>
              <br />
              <br />
              <div>
                <label className='register-input' htmlFor='password'>
                  Password*
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  minLength='3'
                  maxLength='25'
                  required
                />
              </div>
              <p>* = required</p>
              <br />
              <br />
              <input
                className='register-submit'
                type='submit'
                value='Register'
              />
            </form>
            <div role='alert'>
              {(this.state.error && (
                <p style={{ color: 'red' }}>{this.state.error}</p>
              )) ||
                (this.state.login && (
                  <p style={{ color: 'green' }}>
                    {this.state.login}{' '}
                    <Link style={{ color: 'green' }} to='/login'>
                      Log In
                    </Link>{' '}
                  </p>
                ))}
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Register;
