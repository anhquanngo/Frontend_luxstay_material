import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import RangeDate from '@components/RangeDate/RangeDate'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    cart: {
        borderWidth: "1px",
        border: "solid",
        borderColor: "#E9E9E9",
    }
}));

function Booking(props) {
    const classes = useStyles()
    return (
        <div className={classes.cart}>
            <div style={{ display: 'flex', }}>
                <h1>700,000₫</h1>
                <p style={{ marginLeft: 5, alignSelf: 'center', }}>/đêm</p>
                <p style={{ marginLeft: 5, alignSelf: 'center', textDecorationLine: "line-through" }}>1,000,000₫</p>
            </div>
            <p style={{ backgroundColor: 'red', color: 'white', borderRadius: 10, height: "1.2rem", width: "9rem" }}>Giảm 30% từ chủ nhà</p>
            <p>Giảm 30% cho đặt phòng có checkin từ 01/09 đến 30/09</p>
            <div style={{ textAlignLast: "center" }}>
                <Button variant="contained" size="large" color="secondary">
                    Đặt Ngay
      </Button>
            </div>
        </div>
    )
}


export default Booking

