
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MenuButton from 'components/UI/Buttons/MenuButton';

const useStyles = makeStyles(theme => ({
  popper: {
    width: '100vw',
    zIndex: theme.zIndex.drawer + 2,
    display: 'block',
  },
  paper: {
    height: '100vh',
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.default,
    transformBox: 'view-box',
    overflow: 'auto'
  },
  buttonColor: {
    [theme.breakpoints.down(339)]: {
      marginLeft: 8
    },
    color: theme.palette.text.primary,

  }
}));

const isMobileMenu = ({ open, setOpen }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open)
  };
  const handleItemClick = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'unset';
    }
  }, [open])

  return (
    <>
      <MenuButton type='button' className={classes.buttonColor} onClick={handleClick} isOpen={open} />
    </>
  );
};

export default isMobileMenu;