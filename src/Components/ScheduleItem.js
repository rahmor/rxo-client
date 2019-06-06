import React from 'react';

const ScheduleItem = props => {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.days}</p>
    </>
  );
};

export default ScheduleItem;
