
import React , { useContext} from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';
import CircleButton from 'components/UI/Buttons/CircleButton';
import { AppContext } from 'contexts'
import Logo from 'components/Logo';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1)
    },
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer'
    },
  },
  height: {
    height: '100%'
  },
}));

const LogoWithTitle = ({ history, titleVariant, className }) => {
  const classes = useStyles();
  const theme = useTheme();
  const {isSettingDialog, setIsSettingDialog } = useContext(AppContext);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  
  const onClickHandler =show => () => {
    //setIsSettingDialog(show)
  }

  return (
    <div className={clsx(classes.root, className)}>
      <CircleButton style={{ display: 'flex', backgroundColor: '#292C40', marginRight: 8 }} onClick={onClickHandler(true)} icon={<Logo height = {45} width = {45}/>} > </CircleButton>
      <Typography color='textPrimary' style = {{ fontFamily: 'LULO', color : theme.palette.text.hoverText}} variant={'body1'}>
        {isMd && 'JUKE Box'}
      </Typography>
    </div>
  );
};

export default withRouter(LogoWithTitle);
