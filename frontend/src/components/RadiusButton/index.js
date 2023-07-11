
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import ContainedButton from 'components/UI/Buttons/ContainedButton';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 20
  }
}));

// eslint-disable-next-line react/display-name
const RadiusButton = React.forwardRef(({ className, ...rest }, ref) => {
  const classes = useStyles();

  return (
    <ContainedButton className={clsx(classes.root, className)} ref={ref}  {...rest} />
  );
});

export default RadiusButton;
