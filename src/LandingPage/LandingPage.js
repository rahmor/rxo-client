import React, { Component } from 'react';
import Heading from '../Heading/Heading';

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <main>
        <section class='rxo-lead'>
          <Heading />
          <p>allows you to take pills on schedule</p>
        </section>
      </main>
    );
  }
}

export default LandingPage;
