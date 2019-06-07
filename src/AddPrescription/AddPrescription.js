import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import ApiService from '../services/api-services';
import './AddPrescription.css';

class AddPrescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      rx_name: '',
      day: ''
    };
  }

  addPrescriptionHandler = event => {
    event.preventDefault();
    const { rx_name, day } = this.state;
    ApiService.postPrescription(rx_name, day).then(response => {});
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
        <header>
          <Heading />
        </header>
        <main>
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
          </form>
        </main>
      </div>
    );
  }
}

export default AddPrescription;
