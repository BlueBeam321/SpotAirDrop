import React, { useState, memo } from 'react';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import EyeIcon from 'components/Icons/EyeIcon';
import EyeDisableIcon from 'components/Icons/EyeDisableIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: props => ({
    border: props.readOnly ? `1px solid ${theme.palette.secondary.contrastText}80` : `1px solid ${theme.palette.secondary.contrastText}`,
    borderRadius: theme.spacing(0.5),
    background: 'transparent',
    width: '100%',
    '& input': {
      height: theme.spacing(34 / 8),
      color: theme.palette.secondary.contrastText,
      '-webkit-text-fill-color': props.readOnly ? `${theme.palette.secondary.contrastText}80` : theme.palette.secondary.contrastText,
      '-webkit-box-shadow': '0 0 0px 1000px transparent inset',
      border: 'none',
      padding: '8px 14px',
      '&:-webkit-autofill': {
        'transition': 'background-color 5000s ease-in-out 0s',
      },
      '&:focus': {
        color: theme.palette.primary.contrastText,
        '-webkit-text-fill-color': theme.palette.primary.contrastText,
      }
    },
    '& textarea': {
      color: theme.palette.secondary.contrastText,
      '&:focus': {
        color: theme.palette.primary.contrastText
      },
      '&::placeholder': {
        color: theme.palette.secondary.contrastText,
      }
    },
    '& fieldset': {
      border: 'none'
    },
    '&:hover': {
      border: props.readOnly ? `1px solid ${theme.palette.secondary.contrastText}80` : `1px solid ${theme.custom.palette.grey}`
    }
  }),
  error: props => ({
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`
    }
  }),
  textLength: {
    fontSize: 14,
    transform: 'scale(0.8)'
  },
  inputAdornment: {
    position: 'absolute',
    right: theme.spacing(2)
  },
}));

const OutlinedTextField = ({ className, value, placeholder, showLength, prefix, limit = 50, type, error, readOnly, endAdornment, ...rest }) => {
  const classes = useStyles({ readOnly });
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const mouseDownPasswordHandler = event => {
    event.preventDefault();
  };

  return (
    <OutlinedInput
      variant='outlined'
      placeholder={placeholder || ''}
      type={showPassword ? 'text' : type}
      value={value}
      className={clsx(
        className,
        'form-control form-control-lg',
        classes.textField,
        error && classes.error
      )}
      startAdornment={
        prefix ? prefix : null
      }
      endAdornment={
        endAdornment ? endAdornment :
          showLength ?
            <InputAdornment position="end" classes={{ root: classes.textLength }}>
              {`${value ? value.length : 0}/${limit}`}
            </InputAdornment> :
            type === 'password' ? (
              <InputAdornment className={classes.inputAdornment} position='end'>
                <IconButton
                  size='small'
                  onClick={showPasswordHandler}
                  onMouseDown={mouseDownPasswordHandler}>
                  {showPassword ?
                    <EyeIcon color='white' /> :
                    <EyeDisableIcon />
                  }
                </IconButton>
              </InputAdornment>
            ) : null
      }
      readOnly={readOnly}
      {...rest}
    />
  );
}

export const MemoizedOutlinedTextField = memo(props => <OutlinedTextField {...props} />);

export default OutlinedTextField;