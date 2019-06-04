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
      day: '',
      time: ''
    };
  }
  //grab data from form and it's entered and store in state variables.
  addPrescriptionHandler = event => {
    event.preventDefault();
    const { rx_name, days, time } = this.state;
    ApiService.postPrescription(rx_name, days, time).then(response => {});
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
      <>
        <header>
          <Heading />
        </header>
        <main>
          <form onSubmit={event => this.addPrescriptionHandler(event)}>
            <div>
              <label>Prescription</label>
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
              <label>Day</label>
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
            <div>
              <label>Time</label>
              <input
                type='text'
                name='time'
                id='time'
                placeholder='9:00am'
                onChange={event => this.updateTime(event.target.value)}
              />
            </div>
            <br />
            <br />
            <input type='submit' value='Schedule' />
          </form>
        </main>
      </>
    );
  }
}

export default AddPrescription;
