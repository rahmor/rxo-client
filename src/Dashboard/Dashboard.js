import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScheduleItem from '../Components/ScheduleItem';
import ApiService from '../services/api-services';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_schedule: [],
      date: Date().split(' ')
    };
  }

  componentDidMount() {
    ApiService.getUserSchedule(this.props.match.params.id).then(response => {
      this.setState({ user_schedule: response.schedule });
    });
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
              <li key={schedule.prescription_id}>
                <ScheduleItem
                  name={schedule.rx_name}
                  days={schedule.day}
                  times={schedule.time}
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
