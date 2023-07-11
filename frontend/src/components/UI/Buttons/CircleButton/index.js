
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';

import ButtonLink from 'components/UI/Buttons/ButtonLink';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    boxShadow: 'none',
    width: theme.spacing(5.2),
    height: theme.spacing(5.2),
    minHeight: theme.spacing(4.5)
  },
  loadingSpin: {
    position: 'absolute'
  }
}));

const CircleButton = ({ className, icon, href, loading, disabled, color, ...rest }) => {
  const classes = useStyles();

  return (
    <Fab
      component={href ? ButtonLink : 'button'}
      href={href}
      className={clsx(classes.root, className)}
      disabled={loading || disabled}
      color={color}
      {...rest}>
      {icon}
      {loading && <CircularProgress className={classes.loadingSpin} color={color === 'primary' ? 'secondary' : 'primary'} size={16} />}
    </Fab>
  );
};

export default CircleButton;
