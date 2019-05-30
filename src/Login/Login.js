import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import ApiService from '../services/api-services';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  //send user to dashboard or display errors
  //use history to send to dashboard
  //send credentials, once authenticated, send jwt and load up dashboard.
  handleLoginSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target;
    ApiService.postLogin(username.value, password.value)
      .then(response => {
        this.props.history.replace('/dashboard');
        //if jwt exist and response has user id, then go to page with user id.
        // this.props.history.replace('/dashboard/:id');
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
          <div role='alert'>
            {this.state.error && <p className='red'>{this.state.error}</p>}
          </div>
        </main>
      </>
    );
  }
}

export default Login;
