import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../services/api-services';
import store from '../store.js';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: store.user,
      prescriptions: store.prescriptions,
      schedules: store.schedules,
      //destructure store into properties
      //Get today's date by locale or system
      date: new Date(),
      month: Date().split(' '),
      day: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
    };
  }

  //separate month from day and display date and date
  //loop through time array
  componentDidMount() {
    ApiService.getSchedule().then(data => console.log(data));
  }

  render() {
    return (
      <>
        <header>
          <Link to='/'>RXO</Link>
          <Link to='/addprescription'>Add Prescription</Link>
        </header>
        <main>
          <section className='month'>
            <h4>{this.state.month[1]}</h4>
          </section>

          <section className='day'>
            <p>{this.state.day[this.state.date.getDay()]}</p>
          </section>

          <section className='date'>
            <p>{this.state.date.getDate()}</p>
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
