import React from 'react';
import './ScheduleItem.css';

const ScheduleItem = props => {
  return (
    <p className='schedule-list-item'>
      <span>
        {props.days}
        {': '}
      </span>
      <span>{props.name}</span>
    </p>
  );
};

export default ScheduleItem;
