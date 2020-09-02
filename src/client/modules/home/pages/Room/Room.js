import React from 'react'
import SlideRoom from '@components/SliderRoom/SlideRoom'
import Header2 from '@components/Header2/Header2'
import Breadcrumb from '@components/Breadcrumb/Breadcrumb'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Grid, Typography, Button, Avatar, SvgIcon } from '@material-ui/core';
import Transition from '@components/Transition/Transition'
import Utilities from './Utilities'

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
function BuldingIcon(props) {
    return (
        <SvgIcon style={{ marginRight: 5 }} {...props}>
            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </SvgIcon>
    );
}

function room(props) {
    const classes = useStyles();
    const handleClick = () => {
        console.log("da click");
    }
    return (
        <div>
            <Header2 />
            <SlideRoom />
            <Container >
                <Grid container spacing={3} style={{ marginTop: 10 }}>
                    <Grid item xs={8}>
                        <Breadcrumb />
                        <div style={{ display: 'flex' }}>
                            <Typography variant="h4" gutterBottom>
                                Stay&Fun No.4 - Căn hộ 60m2 view cực đẹp, cách mọi điểm du lịch 5 phút đi bộ
                            </Typography>
                            <Avatar alt="Avatar" src="https://material-ui.com/static/images/avatar/3.jpg" className={classes.large} />
                        </div>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <PositionIcon fontSize="medium" />
                                <Typography variant="subtitle1" gutterBottom>
                                    Quận 1, Hồ Chí Minh, Vietnam
                            </Typography>
                                <Typography variant="subtitle1" onClick={handleClick} style={{ paddingLeft: 10 }} gutterBottom>
                                    Xem bản đồ
                            </Typography>
                            </div>
                            <div style={{ display: 'flex', alignSelf: 'center' }}>
                                <BuldingIcon fontSize="medium" />
                                <Typography variant="subtitle1" gutterBottom>
                                    Căn hộ Studio ·
                            </Typography>
                                <Typography variant="subtitle1" onClick={handleClick} style={{ paddingLeft: 10 }} gutterBottom>
                                    60 m2
                            </Typography>
                            </div>
                        </div>
                        <Typography variant="subtitle1" gutterBottom>
                            Nguyên căn · 1 Phòng tắm · 2 giường · 1 phòng ngủ · 2 khách (tối đa 5 khách)
                            </Typography>
                        <Transition />
                        <Utilities />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload
      </Button>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}


export default room

