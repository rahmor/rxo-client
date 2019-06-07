import React from 'react';

const ScheduleItem = props => {
  return (
    <p>
      <span>{props.name} on </span>
      <span>{props.days}</span>
    </p>
  );
};

export default ScheduleItem;
