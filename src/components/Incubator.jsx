import React from 'react';
import CountDownClock from './CountDownClock';
import glamorous from 'glamorous';

const IncubatorDiv = glamorous.div({
  width: '70%',
  border: 'solid 1px blue',
});

const ClockDiv = glamorous.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

function Incubator() {
  return (
    <IncubatorDiv>
      <ClockDiv>
        <CountDownClock />
      </ClockDiv>
    </IncubatorDiv>
  );
}

export default Incubator;
