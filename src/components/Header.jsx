import React from 'react';
import HomeLogo from './HomeLogo';
import Hero from './Hero';
import PopObjectInfo from './PopObjectInfo';
import HistoryButton from './HistoryButton';
import SocialMedia from './SocialMedia';

function Header() {
  return (
    <div>
      <HomeLogo />
      <Hero />
      <PopObjectInfo />
      <HistoryButton />
      <SocialMedia />
    </div>
  );
}

export default Header;
