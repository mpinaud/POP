import React from 'react';
import glamorous from 'glamorous';
import HomeLogo from './HomeLogo';
import Hero from './Hero';
import PopObjectInfo from './PopObjectInfo';
import HistoryButton from './HistoryButton';
import SocialMedia from './SocialMedia';

const HeaderDiv = glamorous.div({
  width: '30%',
  border: 'solid 1px green',
});

function Header() {
  return (
    <HeaderDiv>
      <HomeLogo />
      <Hero />
      <PopObjectInfo />
      <HistoryButton />
      <SocialMedia />
    </HeaderDiv>
  );
}

export default Header;
