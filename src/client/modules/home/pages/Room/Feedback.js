import React from 'react'
import { Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function Feedback(props) {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Đánh giá
                            </Typography>
            <div style={{ display: "flex" }}>
                <div style={{ alignSelf: "center" }}>
                    <Avatar alt="Avatar" src="https://material-ui.com/static/images/avatar/3.jpg" className={classes.large} />
                </div>
                <div style={{ alignSelf: "center", marginLeft: 10 }}>
                    <Typography variant="subtitle1" >Minhphu Nguyen ·</Typography>
                    <Typography variant="subtitle1" >9 months</Typography>
                </div>
                <div >
                    <Rating style={{ marginTop: 5 }} name="half-rating-read" defaultValue={4} precision={0.5} readOnly size="small" />
                </div>
            </div>
        </div >
    )
}



export default Feedback

