import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import ApiService from '../services/api-services';
import './AddPrescription.css';

class AddPrescription extends Component {
  addPrescriptionHandler = event => {
    event.preventDefault();
    const { name, day, time } = event.target;
    ApiService.postPrescription(name.value, day.value, time.value).then(
      response => {
        console.log(response);
      }
    );
  };
  render() {
    return (
      <>
        <header>
          <Heading />
        </header>
        <main>
          <form onSubmit={event => this.addPrescriptionHandler(event)}>
            <input type='text' name='name' placeholder='Rx' />
            <br />
            <br />
            <select name='day' multiple={true}>
              <option value='Sunday'>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
            <select name='time' multiple={true}>
              <option value='6:00'>6:00am</option>
              <option>7:00</option>
              <option>8:00</option>
              <option>9:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00pm</option>
              <option>1:00</option>
              <option>2:00</option>
              <option>3:00</option>
              <option>4:00</option>
              <option>5:00</option>
              <option>6:00</option>
              <option>7:00</option>
              <option>8:00</option>
              <option>9:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00am</option>
              <option>1:00</option>
              <option>2:00</option>
              <option>3:00</option>
              <option>4:00</option>
              <option>5:00</option>
            </select>
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
