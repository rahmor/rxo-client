import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Heading from '../Heading/Heading';

class LandingPage extends Component {
  state = {};

  render() {
    return (
      <>
        <Heading />
        <div className='landing-page'>
          <div className='landing-container'>
            <main role='main'>
              <section className='landing-lead'>
                <h3>Get the tools to manage your prescriptions</h3>
                <h2 className='landing-lead-title'>
                  Schedule | Track | Take Control
                </h2>
                <h2>That's RXO</h2>
                <p id='clock'>
                  <span role='img' aria-label='clock'>
                    &#128336;
                  </span>
                </p>
              </section>
              <div id='demo-button'>
                <Link
                  to={{
                    pathname: '/login',
                    user: {
                      username: 'dunder',
                      password: 'password1234'
                    }
                  }}
                >
                  <button>Take a look</button>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
