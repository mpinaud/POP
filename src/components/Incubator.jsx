import React from 'react';
import CountDownClock from './CountDownClock';
import glamorous from 'glamorous';

const IncubatorDiv = glamorous.div({
  width: '70%',
  border: 'solid 1px blue',
});

function Incubator() {
  return (
    <IncubatorDiv>
      <CountDownClock />
    </IncubatorDiv>
  );
}

export default Incubator;
