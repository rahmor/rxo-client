import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className='landing-container'>
        <header className='landing-header'>
          <h1 className='landing-header-title'>RXO</h1>
          <span className='landing-header-links'>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/dashboard'}>Demo</Link>
          </span>
        </header>
        <main>
          <section className='landing-lead'>
            {/* mortar and pestle shadow color*/}
            <h3 className='landing-rx-ontime'>RXOn-Time</h3>
            <p>
              allows you to take control of your prescription pill regiment. A
              typical pill box orders pills by date, but what if you have take
              some pills that day, and not others. By simply adding an rx, a day
              and a time you will have total control of your prescription
              schedule and won't have to worry about whether or not you have to
              take that pill.
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default LandingPage;
