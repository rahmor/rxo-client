import React from 'react';
import { Link } from 'react-router-dom';
import './Heading.css';
const Heading = () => {
  return (
    <header>
      <span role='banner' className='landing-header'>
        <h1 className='landing-header-title'>
          RX-
          <span role='img' aria-label='clock'>
            &#128336;
          </span>
          n-Time
        </h1>
      </span>
      <span className='landing-header-links'>
        <Link to={'/register'}>
          <button id='register'>Register</button>
        </Link>
        <Link to={'/login'}>
          <button id='login'>Login</button>
        </Link>
      </span>
    </header>
  );
};

export default Heading;
