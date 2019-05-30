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
        this.setState({ login: response.username });
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
            <div role='alert'>
              {(this.state.error && <p>{this.state.error}</p>) ||
                (this.state.login && (
                  <p>
                    You're registration was {this.state.login}.{' '}
                    <Link to='/login'>Log In</Link>{' '}
                  </p>
                ))}
            </div>
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
