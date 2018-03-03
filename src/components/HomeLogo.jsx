import React from 'react';
import glamorous from 'glamorous';

const LogoDiv = glamorous.div({
  width: '90%',
  textAlign: 'center',
  paddingTop: '6px',
  background: 'lightgrey',
  borderRadius: '25px',
});

const Logo = glamorous.p({
  fontSize: '118px',
  margin: 0,
});

function HomeLogo() {
  return (
    <LogoDiv>
      <Logo>P🔴P!</Logo>
    </LogoDiv>
  );
}

export default HomeLogo;
