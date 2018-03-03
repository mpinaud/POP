import React from 'react';
import glamorous from 'glamorous';

const InfoDiv = glamorous.div({
  width: '90%',
  textAlign: 'center',
  background: 'lightgrey',
  borderRadius: '25px',
});

function PopObjectInfo() {
  return (
    <InfoDiv>
      <h1>#IHeartAwards</h1>
      <ul>
        <li>D.O.B.</li>
        <li>Birth Size</li>
        <li>Start Users</li>
        <li>Current Users</li>
        <li>Age</li>
      </ul>
    </InfoDiv>
  );
}

export default PopObjectInfo;
