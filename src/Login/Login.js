import React from 'react';
import Heading from '../Heading/Heading';
import './Login.css';
const Login = () => {
  return (
    <>
      <header>
        <Heading />
      </header>
      <main>
        <form>
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
};

export default Login;
