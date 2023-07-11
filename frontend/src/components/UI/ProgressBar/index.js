import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5
    },
    colorPrimary: {
        // backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

// Inspired by the former Facebook spinners.

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CustomizedProgressBars({tokenSaleProgress}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h6' align='center'> {tokenSaleProgress} % SOLD</Typography>
            <br />
            <BorderLinearProgress variant="determinate" value={tokenSaleProgress } />
        </div>
    );
}