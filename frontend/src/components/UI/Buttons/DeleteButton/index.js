import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TrashIcon from 'components/Icons/TrashIcon';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      borderLeft: `1px solid ${theme.palette.text.secondary}`,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    height: theme.spacing(3),
    // padding: `0 ${theme.spacing(2)}px 0 ${theme.spacing(1)}px`,
    padding: `0 ${theme.spacing(2)}px`,

  },
  label: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    color: theme.palette.error.main,
    marginRight: theme.spacing(10 / 8),
    textDecoration: 'underline'
  },
  hoverColor: {
    color: theme.palette.error.light
  }
}));

const DeleteButton = props => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);

  const onEnter = () => {
    setIsHover(true)
  };

  const onLeave = () => {
    setIsHover(false);
  };

  return (
    <div className={classes.root}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...props}>
      <Typography variant='body2' className={clsx(classes.label, isHover && classes.hoverColor)}>
        delete
      </Typography>
      <TrashIcon
        color={isHover && '#EE2741'} />
    </div>
  );
}

export default DeleteButton;