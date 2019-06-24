import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className='landing-container'>
        <header role='banner' className='landing-header'>
          <i>
            <h1 className='landing-header-title'>RXO</h1>
            <span className='landing-header-links'>
              <Link to={'/register'}>Register</Link>
              <Link to={'/login'}>Login</Link>
            </span>
          </i>
        </header>
        <main role='main'>
          <section className='landing-lead'>
            {/* mortar and pestle shadow color*/}
            <h3 className='landing-lead-title'>RXOn-Time</h3>
            <p>
              allows you to take control of your prescription pill regiment. A
              typical pill box orders pills by date, but what if you have take
              some pills that day, and not others. By simply adding an rx, a day
              and a time you will have total control of your prescription
              schedule and won't have to worry about whether or not you have to
              take that pill.
            </p>
            <p>UserName: Dunder </p>
            <p>Password: Password1234</p>
          </section>
        </main>
      </div>
    );
  }
}

export default LandingPage;
