import React from 'react';
import Heading from '../Heading/Heading';

const Register = () => {
  return (
    <>
      <header>
        <Heading />
      </header>
      <main>
        <p>Register for the site</p>
        <form>
          <input type='text' name='username' placeholder='Name' />
          <br />
          <br />
          <input type='text' name='password' placeholder='Password' />
          <br />
          <br />
          <input type='submit' value='Register' />
        </form>
      </main>
    </>
  );
};

export default Register;
