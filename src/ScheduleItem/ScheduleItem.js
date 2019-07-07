import React from 'react';

const ScheduleItem = props => {
  return (
    <>
      <span>{props.name} on </span>
      <span>{props.days}</span>
    </>
  );
};

export default ScheduleItem;
