import React from 'react';

const ScheduleItem = props => {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.days}</p>
      <p>{props.times}</p>
    </>
  );
};

export default ScheduleItem;
