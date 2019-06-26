import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className='landing-page'>
        <header role='banner' className='landing-header'>
          <i>
            <h1 className='landing-header-title'>
              RX-
              <span role='img' aria-label='clock'>
                &#128336;
              </span>
              n-Time
            </h1>
            <span className='landing-header-links'>
              <Link to={'/register'}>Register</Link>
              <Link to={'/login'}>Login</Link>
            </span>
          </i>
        </header>
        <div className='landing-container'>
          <main role='main'>
            <section className='landing-lead'>
              <h2 className='landing-lead-title'>
                Schedule | Track | Take Control
              </h2>
              <p>UserName: Dunder </p>
              <p>Password: Password1234</p>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default LandingPage;
