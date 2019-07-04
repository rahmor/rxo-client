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
      <div className='dashboard-container'>
        <header className='dashboard-header'>
          <Link to='/prescription'>Add Prescription</Link>
        </header>
        <main>
          <section className='dashboard-current'>
            <h4>{this.state.date[1]}</h4>
            <p>{this.state.date[0]}</p>
            <p>{this.state.date[2]}</p>
          </section>
          <section>
            <div className='dashboard-list'>
              {this.state.user_schedule.map(schedule => (
                <p key={schedule.prescription_id}>
                  <ScheduleItem name={schedule.rx_name} days={schedule.day} />
                </p>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Dashboard;
