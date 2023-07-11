
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from '@material-ui/core';

import { FOOTER_MENUS } from 'constants/links/footer-menu-items';
import CircleButton from 'components/UI/Buttons/CircleButton';
import Logo from 'components/Logo';

const useStyles = makeStyles(theme => ({

    root: {
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        [theme.breakpoints.down(360)]: {
            flexDirection: 'column',
        },
        minHeight: theme.custom.layout.footerHeight,
        maxWidth: theme.custom.layout.topBarMaxWidth,
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        padding: theme.spacing(5, 8, 3, 8),
        backgroundColor: theme.palette.background.default,
        zIndex: theme.zIndex.drawer + 1,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    logo: {
        justifyContent: 'center'
    },
    logowith: {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto'
    },
    color: {
        color: theme.palette.text.darkLight,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1.5)
    }
}));

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const onClickHandler = (url) => {
        window.open(url, '_blank');
    }

    return (
        <footer className={classes.root}>
            <div className={classes.logowith}>
                <Logo className={classes.logo} />
                <Typography className={classes.color} variant='subtitle1'>
                    {isMd && '© 2021 SPOT Token'}
                </Typography>
                {FOOTER_MENUS.map((footerMenu, index) => {
                    return (
                        <CircleButton key = {index} style={{ display: 'flex', backgroundColor: '#292C40', marginRight: 8 }} onClick={() => onClickHandler(footerMenu.url)} icon={footerMenu.icon} />
                    )
                })}
            </div>
        </footer>
    );
};

export default Footer;
