import React from 'react'
import SlideRoom from '@components/SliderRoom/SlideRoom'
import Header2 from '@components/Header2/Header2'
import Breadcrumb from '@components/Breadcrumb/Breadcrumb'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Grid, Typography, Button, Avatar, SvgIcon } from '@material-ui/core';
import InfoRoom from '@root/shared/components/InfoRoom/InfoRoom'
import Utilities from './Utilities'
import PriceRoom from './priceRoom'
import Availability from './Availability'
import Feedback from './Feedback'
import Booking from './Booking'

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#fff',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function PositionIcon(props) {
    return (
        <SvgIcon style={{ marginRight: 5 }}  {...props}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </SvgIcon>
    );
}

function room(props) {
    const classes = useStyles();

    return (
        <div>
            <Header2 />
            <SlideRoom />
            <Container >
                <Grid container spacing={3} style={{ marginTop: 10 }}>
                    <Grid item xs={8}>
                        <Breadcrumb />
                        <InfoRoom />
                        <Utilities />
                        <PriceRoom />
                        <Availability />
                        <Feedback />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload</Button>
                        <Booking />
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}


export default room

