import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "orange"
    }
}));

function Utilities(props) {
    const classes = useStyles()

    return (
        <>

            <Typography variant="h5" gutterBottom>
                Tiện nghi chỗ ở
                            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú
                            </Typography>
            <Typography variant="h5" gutterBottom>
                Tiện ích
                            </Typography>
            <div style={{ display: 'flex', width: "40rem", justifyContent: "space-between" }}>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
            </div>
            <div style={{ display: 'flex', width: "40rem", justifyContent: "space-between" }}>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
            </div>
            <div style={{ display: 'flex', width: "40rem", justifyContent: "space-between" }}>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
            </div>
            <Typography variant="h5" gutterBottom>
                Tiện ích bếp
                            </Typography>
            <div style={{ display: 'flex', width: "40rem", justifyContent: "space-between" }}>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
            </div>
            <Typography variant="h5" gutterBottom>
                Tiện ích nổi bật
                            </Typography>
            <div style={{ display: 'flex', width: "40rem", justifyContent: "space-between" }}>
                <div style={{ display: 'flex' }}>
                    <GradeRoundedIcon className={classes.icon} />
                    <Typography style={{ marginLeft: 5 }} variant="subtitle1">Wifi</Typography>
                </div>
            </div>
        </>
    )
}


export default Utilities

