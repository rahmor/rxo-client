import React, { Component } from 'react';
import ApiService from '../services/api-services';
import AuthService from '../services/auth-service';
import { Link } from 'react-router-dom';

import './AddPrescription.css';

class AddPrescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      login: null,
      rx_name: '',
      day: '',
      id: props.id || AuthService.getIdFromToken(AuthService.getToken())
    };
  }

  addPrescriptionHandler = event => {
    event.preventDefault();
    const { rx_name, day } = this.state;
    ApiService.postPrescription(rx_name, day).then(response => {
      this.setState({ login: response.message });
    });
  };

  updateRx(rx) {
    this.setState({ rx_name: rx });
  }
  updateDay(day) {
    this.setState({ day: day });
    day = '';
  }
  updateTime(time) {
    this.setState({ time: time });
  }

  render() {
    return (
      <div className='addrx-container'>
        <header />
        <main>
          <section>
            <Link style={{ color: 'green' }} to={`/dashboard/${this.state.id}`}>
              Dashboard
            </Link>{' '}
          </section>
          <form
            className='addrx-form'
            onSubmit={event => this.addPrescriptionHandler(event)}
          >
            <div>
              <label className='addrx-input' htmlFor='name'>
                Prescription
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Metformin'
                onChange={event => this.updateRx(event.target.value)}
              />
            </div>
            <br />
            <br />
            <div>
              <label className='addrx-input' htmlFor='day'>
                Day
              </label>
              <input
                type='text'
                name='day'
                id='day'
                placeholder='Wednesday'
                onChange={event => this.updateDay(event.target.value)}
              />
            </div>
            <br />
            <br />
            <input className='addrx-submit' type='submit' value='Schedule' />
            {this.state.login && (
              <p style={{ color: 'green' }}>{this.state.login} </p>
            )}
          </form>
        </main>
      </div>
    );
  }
}

export default AddPrescription;
