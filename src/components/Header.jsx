import React from 'react';
import HomeLogo from './HomeLogo';
import Hero from './Hero';
import PopObjectInfo from './PopObjectInfo';
import HistoryButton from './HistoryButton';

function Header() {
  return (
    <div>
      <HomeLogo />
      <Hero />
      <PopObjectInfo />
      <HistoryButton />
    </div>
  );
}

export default Header;
