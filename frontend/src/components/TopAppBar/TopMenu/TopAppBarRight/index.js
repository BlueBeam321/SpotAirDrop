
import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar, { ConfigProvider } from 'react-avatar';
import { AppContext } from 'contexts';
import makeBlockie from 'ethereum-blockies-base64';
import { Typography } from '@material-ui/core';

import RadiusButton from 'components/RadiusButton';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  avatarContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 1.5, 0, 1.5)
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '64px'
  },
  avatar: {
    cursor: 'pointer',
    marginRight: theme.spacing(1)
  },
  backgroundColor: {
    backgroundColor: `${theme.palette.error.hoverText} !important`,
  },
  borderColor: {
    borderTop: `0.5px solid  ${theme.palette.text.hoverText} !important`
  }
}));

const TopAppBarRight = ({ isMobileMenu }) => {
  const { account, setIsWalletDialog } = useContext(AppContext);
  const isAvatarSelected = ''

  const classes = useStyles({})
  const theme = useTheme();

  const connectWallet = () => {
    if (isEmpty(account)) {
      setIsWalletDialog(true)
    }
    else {
      setIsWalletDialog(false)
    }
  };

  return (
    <>
      <div className={classes.root}>
        <div className={clsx(classes.avatarList, isAvatarSelected ? classes.borderColor : null)}>
          <ConfigProvider
            colors={['#FF2929', '#FF7A29', '#FAD02E', '#91FA49', '#36D8B7', '#3B8AFF', '#991EF9', '#FF5DCD']}>
            {!isEmpty(account)
              ?
              <>
                <RadiusButton variant='outlined' onClick={() => setIsWalletDialog(true)}>
                  <Avatar size={"28"} className={classes.avatar} round={true}
                    src={makeBlockie(account)} name={"Bonecoin"} />
                  <Typography variant = 'body1'>
                    {account?.slice(0, 4) + '...' + account?.slice(account?.length - 4, account?.length)}
                  </Typography>
                </RadiusButton>
              </>
              :
              <>
                {!isMobileMenu &&
                  <RadiusButton
                    style={{ backgroundColor: theme.palette.error.light }}
                    onClick={connectWallet}>
                    Connect Wallet
                  </RadiusButton>}
              </>
            }
          </ConfigProvider>
        </div>
      </div>
    </>
  );
};

export default TopAppBarRight;
