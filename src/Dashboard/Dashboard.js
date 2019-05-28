import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import './Dashboard.css';

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <Heading />
        </header>
        <main>
          <section>
            <h4>May</h4>
          </section>

          <section className='day'>
            <p>Su M T W Th F Sa</p>
          </section>

          <section className='date'>
            <p>7 8 9 10 11 12 13</p>
          </section>

          <section>
            <p>
              8:00am <span>RX</span>
              <span>RX</span>
              <span>RX</span>
            </p>
            <p>9:00am</p>
            <p>
              10:00am<span>RX</span>
              <span>RX</span>
              <span>RX</span>
            </p>
            <p>11:00am</p>
            <p>
              12:00am<span>RX</span>
            </p>
            <p>1:00pm</p>
            <p>
              2:00pm <span>RX</span>
              <span>RX</span>
            </p>
            <p>3:00pm</p>
          </section>
        </main>
      </>
    );
  }
}

export default Dashboard;
