import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScheduleItem from '../Components/ScheduleItem';
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
      user_schedule: store.user_schedule,
      date: Date().split(' ')
    };
  }

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
            <h4>{this.state.date[1]}</h4>
          </section>

          <section className='day'>
            <p>{this.state.date[0]}</p>
          </section>

          <section className='date'>
            <p>{this.state.date[2]}</p>
          </section>
          <ul>
            {this.state.user_schedule.map(schedule => (
              <li key={schedule.id}>
                <ScheduleItem
                  name={schedule.name}
                  days={schedule.days}
                  times={schedule.times}
                />
              </li>
            ))}
          </ul>
        </main>
      </>
    );
  }
}

export default Dashboard;
