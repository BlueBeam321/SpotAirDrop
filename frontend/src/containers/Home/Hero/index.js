import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';

import Image from 'components/UI/Image';
import SectionHeader from 'components/UI/SectionHeader';
import PresaleAirdrop from 'components/UI/presaleAirdrop'
const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      marginBottom: 60
    },
  },
  mobileImageContainer: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute', left: 0, marginTop: 80,
    },
    position: 'absolute', right: 0, marginTop: 80,
  },
  buyMarsButton: {
    backgroundColor: theme.palette.error.light
  }
}));

const Hero = props => {
  const { account, chainId, library, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: theme.palette.text.primary, fontSize: 18 }}>
                  Presale AND Airdrop for
                </span>
                <span style={{ color: theme.palette.error.light }}>
                  SPOT TOKEN   <Image
                    src="assets/images/ASTROH.png"
                    alt="Web3 Legal Engineering"
                    height={32}
                    width={32}
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  />
                  <br />
                </span>
                <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                  <b style={{color:'green'}}>spot.trade</b> is an advanced marketplace to create, promote, exchange and manage tokenized onand off-chain assets.
                  <br />
                  As a Web3 Gallery, <b style={{color:'green'}}>spot.trade</b> supports its users to collect, visualize and and organize NFTs in a more
                  sophisticated way.
                  <br />
                  <b style={{color:'green'}}>spot.trade</b> provides Portfolio Management solutions for investment value stored in NFTs.
                </span>
              </div>
            }
            // subtitle="Superpowers for Any Currency"

            align={isMd ? "left" : 'center'}
            disableGutter
            titleVariant="h3"
          />
          <PresaleAirdrop account={account} chainId={chainId} library={library} />
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="assets/images/ASTROH_.png"
            alt="Web3 Legal Engineering"
            className={classes.image}
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
