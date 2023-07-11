

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';

import TopMenu from './TopMenu';
import { commonUseStyles } from 'styles/use-styles';

const useStyles = makeStyles(theme => ({
  appBar: props => ({
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.background.main,
      paddingRight: 0,
      paddingLeft: 0
    },
    [theme.breakpoints.down(340)]: {
      padding: 0,
    },
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    zIndex: theme.zIndex.drawer + 3,
    padding: theme.spacing(0, 5, 0, 5),
    backgroundColor:  theme.palette.background.main,
    minHeight: theme.spacing(4.5),
    maxWidth: theme.custom.layout.topBarMaxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: `none`
  }),
  flex: {
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'contents',
    },
    // backgroundColor: theme.palette.background.default,
    backgroundColor: 'transparent',
    width: '100%',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  horizontalFlex: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuIcon: {
    [theme.breakpoints.up('sm')]: {
      position: 'fixed',
      left: theme.spacing(3),
      top: theme.spacing(.5)
    }
  },
  height: {
    height: '100%'
  }
}));

const TopAppBar = ({ layout }) => {
  const classes = useStyles({ layout });
  const commonClasses = commonUseStyles();

  return (
    <AppBar
      position='sticky'
      className={classes.appBar}>
      <Toolbar className={classes.flex} >
        <div className={clsx(classes.horizontalFlex, commonClasses.responsiveWidth, classes.height)}>
          <TopMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;