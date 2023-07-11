
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  wrapper: props => ({
    position: 'relative',
    width: props.fullWidth ? '100%' : null
  }),
  root: {
    margin: theme.spacing(3 / 8),
    boxShadow: 'none',
    textTransform: 'none',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    minWidth: theme.spacing(5),
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '150%',
      width: '200%',
      height: '100%',
      transform: 'skewX(-20deg)',
      transition: 'background 0.4s ease 0s',
      backgroundImage: 'linear-gradient(to right, transparent, rgba(255,255,255,0.20), transparent)',
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: theme.palette.background.main,
      transitionDelay: '0.25s',
      '&::after': {
        animation: `$shine 0.75s cubic-bezier(0.01, 0.56, 1, 1)`
      },
    },
    '&:disabled': {
      color: theme.palette.text.secondary,
      border: 'none'
    }
  },
  outlined: {
    borderColor: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.secondary.contrastText,
    },
    '&:disabled': {
      color: theme.palette.text.secondary,
    }
  },
  buttonProgress: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  "@keyframes shine": {
    '0%': { left: '200%' },
    '100%': { left: '-200%' }
  }
}));

const ContainedButton = ({ className, type, color, variant = 'contained', disabled, loading, children, fullWidth, disable, ...rest }) => {
  const classes = useStyles({ fullWidth });

  return (
    <div className={classes.wrapper}>
      <Button
        className={clsx(className, classes.root, variant === 'outlined' && classes.outlined)}
        color={color}
        variant={variant}
        type={type}
        disabled={loading || disable}
        {...rest}>
        {children}
      </Button>
      {loading &&
        <CircularProgress
          size={24}
          className={classes.buttonProgress} />
      }
    </div>
  );
};

export default ContainedButton;
