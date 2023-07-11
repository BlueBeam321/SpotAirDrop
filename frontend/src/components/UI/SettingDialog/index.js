
import React, { useState, useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { useSnackbar } from 'notistack';

import CircleButton from 'components/UI/Buttons/CircleButton';
import RadiusButton from 'components/RadiusButton';
import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';
import { presaleInstance } from 'services/presaleInstance';
import { isEmpty, delay } from 'utils/utility';
import { ethers } from "ethers";
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        border: `solid 0.5px ${theme.palette.text.secondary}`,
        margin: theme.spacing(0.5),
        borderRadius: '20px'
    },
    dialogTitleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row !important'
    },
    dialogActions: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(3),
        marginRight: -theme.spacing(2 / 8)
    },
    avatar: {
        backgroundColor: 'transparent',
        border: `2px solid ${theme.palette.text.secondary}`,
        height: theme.spacing(9),
        width: theme.spacing(9),
        marginRight: theme.spacing(1)
    },
    chipConatiner: {
        padding: theme.spacing(2.5, 1, 2.5, 1)
    },
    chip: {
        margin: theme.spacing(.5),
        backgroundColor: theme.palette.text.hoverText
    },
    titleLine: {
        marginBottom: theme.spacing(2.5)
    },
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    button: {
        border: 'none',
        background: 'linear-gradient(125deg, #06352d, #36f3d2 80%)',
        width: '100% !important'
    },
    warningbutton: {
        border: 'none',
        background: 'linear-gradient(125deg, #aa352d, #99f3d2 100%)',
        width: '100% !important'
    },
    dialogActionContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 0,
        padding: theme.spacing(3)
    },
    selectContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 8
    },
    loading: {
        width: 'auto !important',
        height: 'auto !important'

    }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SettingDialog = ({account, chainId, library, onClose}) => {
    const classes = useStyles();
    const theme = useTheme();
    const { enqueueSnackbar } = useSnackbar();
    const presaleContract = presaleInstance(account, chainId, library);
    const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true,
    });

    const [open] = useState(true);
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [state, setState] = useState({
        minval: 0,
        maxval: 0,
        rateval:0,
        totalamount: 0
    });

    const inputChangeHandler = useCallback(event => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState, [name]: value
        }));
    }, []);

    const startPresaleHandler = async () => {
        if (state.minval <= 0) {
            enqueueSnackbar(`BNB is insufficient to set minium value`, { variant: 'error' });
            return
        }
        if ( state.minval > state.maxval ) {
            enqueueSnackbar(`max value is less than min value`, { variant: 'error' });
            return
        }
        setLoadingStatus(true)
        try {
            let loop = true
            let tx = null
            let _min = ethers.utils.parseUnits(state.minval, 6).mul(ethers.constants.WeiPerEther).div(1000000).toString()
            let _max = ethers.utils.parseUnits(state.maxval, 6).mul(ethers.constants.WeiPerEther).div(1000000).toString()
            let _rate = ethers.utils.parseUnits(state.rateval, 6).mul(ethers.constants.WeiPerEther).div(1000000).toString()
            let _total = ethers.utils.parseUnits(state.totalamount, 6).mul(ethers.constants.WeiPerEther).div(1000000).toString()
            // const {hash: startHash} = await presaleContract.startPresale(`${state.minval*1e18}`, `${state.maxval*1e18}`, `${state.totalamount*1e18}`, `${state.rateval*1e18}`);
            const {hash: startHash} = await presaleContract.startPresale(_min, _max, _total, _rate);
            while (loop) {
                tx = await library.getTransactionReceipt(startHash)
                console.log('kevin start transaction tx', tx)
                if(isEmpty(tx)) {
                    await delay(300)
                } else {
                    loop = false
                    if (tx.status === 1) {
                        setLoadingStatus(false)
                        enqueueSnackbar(`startPresale has been successfully processed!`, { variant: 'success' });
                        return;
                    }
                }
            }
        }
        catch (error) {
            enqueueSnackbar(`setting error ${error?.data?.message}`, { variant: 'error' });
            setLoadingStatus(false)
            console.log('kevin===>', error)
        }
    }

    const startAirdropHandler = async () => {
        try {
            setLoadingStatus (true);
            const {hash: airdrophash } = await presaleContract.startAirdrop();
            let loop = true;
            let tx = null;
            while (loop) {
                tx = await library.getTransactionReceipt(airdrophash);
                if(isEmpty(tx)) {
                    await delay(300)
                } else {
                    loop = false
                    if (tx.status === 1) {
                        setLoadingStatus(false)
                        enqueueSnackbar(`startAirdrop has been successfully processed!`, { variant: 'success' });
                        return;
                    }
                }
            }
        }
        catch(error) {
            enqueueSnackbar(`setting error ${error?.data?.message}`, { variant: 'error' });
            setLoadingStatus(false)
            console.log('kevin===>', error)
        }
    }

    const endPresaleHandler = async () => {
        try {
            setLoadingStatus (true);
            const {hash: endpresale } = await presaleContract.endPresale();
            let loop = true;
            let tx = null;
            while (loop) {
                tx = await library.getTransactionReceipt(endpresale);
                if(isEmpty(tx)) {
                    await delay(300)
                } else {
                    loop = false
                    if (tx.status === 1) {
                        setLoadingStatus(false)
                        enqueueSnackbar(`end presale has been successfully processed!`, { variant: 'success' });
                        return;
                    }
                }
            }
        }
        catch(error) {
            enqueueSnackbar(`setting error ${error?.data?.message}`, { variant: 'error' });
            setLoadingStatus(false)
            console.log('kevin===>', error)
        }
    }
    const endAirdropHandler = async () => {
        try {
            setLoadingStatus (true);
            const presaleContract = presaleInstance(account, chainId, library);
            const {hash: airdrophash } = await presaleContract.endAirdrop();
            let loop = true;
            let tx = null;
            while (loop) {
                tx = await library.getTransactionReceipt(airdrophash);
                if(isEmpty(tx)) {
                    await delay(300)
                } else {
                    loop = false
                    if (tx.status === 1) {
                        setLoadingStatus(false)
                        enqueueSnackbar(`end airdrop has been successfully processed!`, { variant: 'success' });
                        return true;
                    }
                }
            }
        }
        catch(error) {
            enqueueSnackbar(`setting error ${error?.data?.message}`, { variant: 'error' });
            setLoadingStatus(false)
            console.log('kevin===>', error)
            return false
        }
    }

    return (
        <div>
            <Dialog classes={{ paper: classes.root }}
                disableEnforceFocus fullScreen={isSm ? true : false}
                maxWidth={'lg'} open={open}
                TransitionComponent={Transition} >
                <DialogTitle>
                    <div className={classes.dialogTitleContainer}>
                        <Typography variant='h6' color='textSecondary'>Presale and Airdrop setting.
                        </Typography>
                        <CircleButton
                            style={{ backgroundColor: '#1B1F2E' }} onClick={onClose}
                            icon={<CloseIcon style={{ color: theme.palette.text.primary }} fontSize='default' />} />
                    </div>
                </DialogTitle>
                <DialogContent classes={{ root: classes.dialogContent }}>
                    <Typography component='div' variant='body1'
                        style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        FOR ONLY OWNER OF ASTROH.
                    </Typography>
                    <Grid container spacing={2} alignItems='center' justify='center' direction={isSm ? 'column' : 'row'}>
                        <Grid item xs={12} md={3} style={{ width: '100%' }}>
                            MIN:
                            <MemoizedOutlinedTextField
                                placeholder={0}
                                name='minval'
                                type="number"
                                value={state.minval}
                                onChange={inputChangeHandler}
                                endAdornment={"BNB"}
                            />
                        </Grid>
                        <Grid item xs={12} md={3} style={{ width: '100%' }}>
                            MAX:
                            <MemoizedOutlinedTextField
                                placeholder='max value'
                                name={'maxval'}
                                type="number"
                                value={state.maxval}
                                onChange={inputChangeHandler}
                                endAdornment={"BNB"}
                            />
                        </Grid>
                        <Grid item xs={12} md={3} style={{ width: '100%' }}>
                            RATE:
                            <MemoizedOutlinedTextField
                                placeholder='rate value'
                                name={'rateval'}
                                type="number"
                                value={state.rateval}
                                onChange={inputChangeHandler}
                                endAdornment={"ASTROH/BNB"}
                            />
                        </Grid>
                        <Grid item xs={12} md={3} style={{ width: '100%' }}>
                            TOTAL AMOUNT:
                            <MemoizedOutlinedTextField
                                placeholder='total amount'
                                name={'totalamount'}
                                type="number"
                                value={state.totalamout}
                                onChange={inputChangeHandler}
                                endAdornment={"BNB"}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions disableSpacing classes={{ root: classes.dialogActionContainer }} >
                    <Grid container spacing={2} alignItems='center' justify='center' direction={isSm ? 'column' : 'row'}>
                        <Grid item xs={12} md={6} style={{ width: '100%' }}>
                                <RadiusButton
                                    loading={loadingStatus}
                                    onClick={ startPresaleHandler } variant='outlined'
                                    className={classes.button} fullWidth={true}>
                                    <Typography variant='h6'>
                                        {'START PRESALE'}
                                    </Typography>
                                </RadiusButton>
                        </Grid>
                        <Grid item xs={12} md={6} style={{ width: '100%' }}>
                            <RadiusButton
                                loading={loadingStatus}
                                onClick={ endPresaleHandler } variant='outlined'
                                className={classes.warningbutton} fullWidth={true}>
                                <Typography variant='h6'>
                                    {'END PRESALE'}
                                </Typography>
                            </RadiusButton>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems='center' justify='center' direction={isSm ? 'column' : 'row'}>
                        <Grid item xs={12} md={6} style={{ width: '100%' }}>
                                <RadiusButton
                                    loading={loadingStatus}
                                    onClick={ startAirdropHandler } variant='outlined'
                                    className={classes.button} fullWidth={true}>
                                    <Typography variant='h6'>
                                        {'START AIRDROP'}
                                    </Typography>
                                </RadiusButton>
                        </Grid>
                        <Grid item xs={12} md={6} style={{ width: '100%' }}>
                            <RadiusButton
                                loading={loadingStatus}
                                onClick={ endAirdropHandler } variant='outlined'
                                className={classes.warningbutton} fullWidth={true}>
                                <Typography variant='h6'>
                                    {'END AIRDROP'}
                                </Typography>
                            </RadiusButton>
                        </Grid>
                    </Grid>
                </DialogActions >
            </Dialog>
        </div>
    );
}

export default SettingDialog;