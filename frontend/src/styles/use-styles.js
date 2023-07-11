
import { makeStyles } from '@material-ui/core/styles';
import { isWidthUp } from '@material-ui/core/withWidth';

const commonUseStyles = makeStyles(theme => ({
  responsiveWidth: {
    [theme.breakpoints.up('sm')]: {
      width: 'auto'
    },
    width: '100%',
  },
  flex: {
    display: 'flex',
  },
  rowDirection: {
    flexDirection: 'row',
  },
  columnDirection: {
    flexDirection: 'column'
  },
  centerAlign: {
    alignItems: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  textRight: {
    textAlign: 'right'
  }
}));
const breakpoints = new Set(['xl', 'lg', 'md', 'sm', 'xs']);

const checkBreakpointValidation = breakpoint => {
  if (!breakpoints.has(breakpoint)) {
    throw new Error('Breakpoint is invalid.');
  }
};
const isWidthWiderThan = (breakpoint, width) => {
  checkBreakpointValidation(breakpoint);

  if (isWidthUp(breakpoint, width)) {
    return true
  }
  return false;
};
const boxShadow = '0 1px 6px rgba(57,73,76,.35)';
export {
  isWidthWiderThan,
  commonUseStyles,
  boxShadow,
};
