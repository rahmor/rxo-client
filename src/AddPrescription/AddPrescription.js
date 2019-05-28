import React from 'react';
import Heading from '../Heading/Heading';
import './AddPrescription.css';

const AddPrescription = () => {
  return (
    <>
      <header>
        <Heading />
      </header>
      <main>
        <form>
          <input type='text' name='name' placeholder='Rx' />
          <br />
          <br />
          <select multiple='true'>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>
          <select multiple='true'>
            <option>6:00am</option>
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
};

export default AddPrescription;
