import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <h1>RXO</h1>
          <Link to={'/register'}>Register</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/dashboard'}>Demo</Link>
        </header>
        <main>
          <section className='rxo-lead'>
            <Heading />
            <p>allows you to take pills on schedule</p>
          </section>
        </main>
      </>
    );
  }
}

export default LandingPage;
