import React from 'react';
import glamorous from 'glamorous';

const Heading = glamorous.h1({
  fontSize: '20em',
  color: '#CC3A4B',
});

function CountDownClock() {
  return (
    <div>
      <Heading>5:00</Heading>
    </div>
  );
}

export default CountDownClock;
