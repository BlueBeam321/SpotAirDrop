
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import Section from 'hoc/Section';
import Hero from './Hero';
//import SectionAlternate from 'hoc/SectionAlternate';
import TradingViewBoard from './TradingViewBoard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/assets/images/homeBackground.jpg)'
  },
}));

const Home = () => {
  const classes = useStyles();
  const { account, library, chainId } = useContext(AppContext);
  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: 'ease-in-out',
  });

  return (
    <div className={classes.root}>
      <Section >
        <Hero
          account={account} chainId = {chainId} library = {library} />
      </Section>
      {/* <Section>
        <TradingViewBoard
          account={account} />
      </Section> */}
    </div >
  );
};

export default Home;
