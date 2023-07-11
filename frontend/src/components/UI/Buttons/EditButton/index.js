import React, { useState } from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from 'components/Icons/EditIcon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: `0 ${theme.spacing(2)}px`,
    height: theme.spacing(3)
  },
  leftLine: {
    borderLeft: `1px solid ${theme.palette.text.secondary}`,
  },
  label: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(10 / 8),
    textDecoration: 'underline'
  },
  hoverColor: {
    color: theme.palette.primary.contrastText
  }
}));

const EditButton = ({ noBorder, ...rest }) => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);

  const onEnter = () => {
    setIsHover(true)
  }

  return (
    <div className={clsx(classes.root, !noBorder && classes.leftLine)}
      onMouseEnter={onEnter}
      onMouseLeave={() => setIsHover(false)}
      {...rest}>
      <Typography variant='body2' className={clsx(classes.label, isHover && classes.hoverColor)}>
        edit
      </Typography>
      <EditIcon
        color={isHover && '#fff'} />
    </div>
  );
}

export default EditButton;