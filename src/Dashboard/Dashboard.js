import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
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
      <div className='dashboard-container'>
        <header className='dashboard-header'>
          <h1 className='dashboard-header-title'>
            RX-
            <span role='img' aria-label='clock'>
              &#128336;
            </span>
            n-Time
          </h1>
        </header>{' '}
        <main>
          <section className='dashboard-current'>
            <span className='dashboard-date'>{this.state.date[1]}</span>
            <span className='dashboard-date'>{this.state.date[0]}</span>
            <span className='dashboard-date'>{this.state.date[2]}</span>
            <button className='dashboard-prescription-button'>
              <Link to='/prescription'>Add Prescription</Link>
            </button>
          </section>
          <section>
            <div className='dashboard-list'>
              {this.state.user_schedule.map(schedule => (
                <div key={schedule.prescription_id}>
                  <ScheduleItem name={schedule.rx_name} days={schedule.day} />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Dashboard;
