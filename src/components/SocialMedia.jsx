import React from 'react';
import glamorous from 'glamorous';

const SocialMediaDiv = glamorous.div({
  width: '90%',
  height: '7em',
  background: 'lightgrey',
  borderRadius: '25px',
});

function SocialMedia() {
  return (
    <SocialMediaDiv>
        I'm a twitter icon • I'm a facebook icon • I'm an email icon
    </SocialMediaDiv>
  );
}

export default SocialMedia;
