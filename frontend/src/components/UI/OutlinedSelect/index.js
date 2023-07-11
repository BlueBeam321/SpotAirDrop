import React, { memo } from 'react';
import clsx from 'clsx';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownIcon from 'components/Icons/ArrowDownIcon';

const useStyles = props => makeStyles(theme => ({
  popper: {
    position: 'relative',
    // TODO: hard coded
    zIndex: 3000
  },
  root: {
    position: 'relative',
    display: 'flex',
  },
  textField: {
    width: '100%',
    height: props.sm && 36,
    padding: `0 !important`,
    background: 'transparent',
    border: `1px solid ${theme.palette.secondary.contrastText}`,
    borderRadius: theme.spacing(0.5),

    '& > div': {
      padding: props.prefixWidth ? `0 40px 0 ${props.prefixWidth}px !important` : (props.startAdornment ? `0 40px 0 60px !important` : `0 40px 0 12px !important`)
    },
    '& input': {
      padding: `8px 6px !important`,
      color: theme.palette.secondary.contrastText,
      '-webkit-text-fill-color': theme.palette.secondary.contrastText,
      '-webkit-box-shadow': '0 0 0px 1000px transparent inset',
      border: 'none',
      '&:-webkit-autofill': {
        'transition': 'background-color 5000s ease-in-out 0s',
      },
      fontSize: props.sm && `14px !important`,
      '&:focus': {
        color: theme.palette.primary.contrastText,
        '-webkit-text-fill-color': theme.palette.primary.contrastText,
      },
    },
    '& fieldset': {
      border: 'none'
    },
    '&:hover': {
      border: `1px solid ${theme.custom.palette.grey}`
    }
  },
  error: {
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
    }
  },
  arrowIcon: {
    width: 14,
    height: 14,
  },
  input: {
    minHeight: props.sm ? 36 : 50,
  },
  paper: {
    background: theme.palette.background.default,
    border: `1px solid ${theme.palette.secondary.contrastText}`,
  },
  optionItem: { // list item
    height: !props.sm ? 40 : 34,
    fontSize: !props.sm ? 14 : 13,
    whiteSpace: 'nowrap',
    textTransform: 'ellipsis',
    '&:hover': {
      background: theme.palette.primary.dark
    }
  },
  endAdornment: { // drop down Icon
    marginTop: 4,
    marginRight: 8
  },
  inputFocused: {
    background: 'green'
  },
  startAdornment: {
    position: 'absolute',
    transform: props.sm ? 'translate(-50%, -50%) scale(0.74)' : 'translate(-50%, -50%)',
    top: '50%',
    left: props.prefixWidth ? props.prefixWidth / 2 + 4 : 32,
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',

  },
  hide: {
    display: 'none'
  }
}));

const OutlinedSelect = ({
  items = [],
  children,
  className,
  placeholder,
  getOptionLabel,
  onChange,
  startAdornment,
  prefixWidth,
  error,
  value,
  readOnly,
  multiple,
  sm,
  name,
  filterSelectedOptions = true,
  renderTags,
  ...rest
}) => {
  const classes = useStyles({ sm, startAdornment, prefixWidth })();

  const onChangeHandler = (event, value) => {
    // value.value && console.log('ANT: EMERGERNCY : FIX THIS, ', name, value);
    onChange && onChange(value.value || value, name);
  }

  return (
    <Autocomplete
      options={items}
      multiple={multiple}
      disableClearable
      disabled={readOnly}
      getOptionLabel={getOptionLabel || (option => (option.label || option))}
      filterSelectedOptions={multiple && filterSelectedOptions}
      renderInput={params => (
        <div className={classes.root}>
          {startAdornment && <div className={classes.startAdornment}>{startAdornment}</div>}
          <TextField
            className={clsx(classes.textField, error && classes.error)}
            {...params}
            variant="outlined"
            placeholder={placeholder || 'Select'}
            fullWidth
          />
        </div>
      )}
      // TODO: hard coded color value
      popupIcon={readOnly ? null : <ArrowDownIcon className={classes.arrowIcon} color='#6B76A1' />}
      classes={{
        popper: classes.popper,
        inputRoot: classes.input,
        paper: clsx(classes.paper, readOnly && classes.hide),
        option: classes.optionItem,
        endAdornment: classes.endAdornment,
      }}
      value={value}
      onChange={onChangeHandler}
      {...rest}
    />
  );
}

export const MemoizedOutlinedSelect = memo(props => <OutlinedSelect {...props} />);

export default OutlinedSelect;