
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopAppBar from 'components/TopAppBar';
import Footer from 'components/Footer';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  main: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 0, 0, 0)
    },
    flexGrow: 1,
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight}px)`,
    width: '100%',
    padding: theme.spacing(0, 5, 0, 5)
  },
}));

const Layout = ({ children, layout, account }) => {
  const classes = useStyles({});

  return (
    <>
      <div className={classes.root}>
        <TopAppBar layout={layout} />
        <main className={classes.main}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default memo(Layout);