import React from 'react';
import glamorous from 'glamorous';

const HeroDiv = glamorous.div({
  width: '90%',
  textAlign: 'center',
  background: 'lightgrey',
  borderRadius: '25px',
});

function Hero() {
  return(
    <HeroDiv>
      <p>
        A real time interactive data visualizer comparing the lifecycle of the top 20 trending Twitter tags. Hear the POP once it's over.
      </p>
      <p>
        Each tag will begin it’s Pop-cycle in the form of a black bubble floating amongst others within an incubator. We then start recording it’s Pop-file into our database. A Pop-file includes a tag name, start time and date, start percentage size, start number of Twitter users, how many current Twitter users tagging, and number of iterations in the incubator. It’s start percentage size will be based off comparison of one another by number of Twitter users currently using that tag. There will be a 5 minute countdown timer for this is when a user can hover on each individual bubble to see it’s current recorded Pop-file before the next iteration is called. A Pop-cycle’s color will be based off how many iterations it’s sat in the incubator.
      </p>
    </HeroDiv>
  );
}

export default Hero;
