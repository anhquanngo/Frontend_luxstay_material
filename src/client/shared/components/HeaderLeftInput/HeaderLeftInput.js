import React from 'react';
import RangeDate from '../RangeDate/RangeDate';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckIcon from '@material-ui/icons/Check';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Category from '../Category/Category';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({

    header_left: {
        width: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header_logo: {
        width: '10%',
    },
    header_input: {
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: '50%',
        maxHeight: '50%',
        backgroundColor: '#F5F5F5',
        width: '90%',
        borderRadius: '8px',
        minWidth: '490px',
    },
    boxSearch: {
        width: '50%',
        minWidth: '40%',
        display: 'flex',
        alignItems: 'center',
        '&:focus-within': {
            border: '2px solid #605959',
            borderRadius: '8px',
        }
    },
    divider: {
        height: 32,
        marginTop: 5,
    },
    button_date: {
        width: '15%',
        position: 'relative',

        '&:focus-within': {
            border: '2px solid #605959',
            borderRadius: '8px',
            "& $header_select_date": {
                display: 'inline-block',
            }
        },

    },
    header_select_date: {
        position: 'absolute',
        width: '700px',
        height: '390px',
        backgroundColor: '#FFFFFF',

        top: '140%',
        display: 'none',
        borderRadius: '5px',
        border: '1px solid #c6c9d1',
        '&:before': {
            content: '""',
            top: '-8px',
            right: '52%',
            transform: 'rotate(45deg)',
            height: '15px',
            width: '15px',

            borderTop: '1px solid #c6c9d1',
            borderLeft: '1px solid #c6c9d1',
            position: 'absolute',
            background: '#fff',
        },




    },

    button_slot: {
        width: '25%',
        position: 'relative',
        '&:focus-within': {
            border: '2px solid #605959',
            borderRadius: '8px',
            "& $select_slot": {
                display: 'inline-block',
            }
        },


    },
    select_slot: {
        position: 'absolute',
        width: '320px',
        height: '230px',
        backgroundColor: '#FFFFFF',
        top: '140%',
        left: 0,

        display: 'none',
        borderRadius: '5px',
        border: '1px solid #c6c9d1',
        '&:before': {
            content: '""',
            top: '-8px',
            left: '10%',
            transform: 'rotate(45deg)',
            height: '15px',
            width: '15px',

            borderTop: '1px solid #c6c9d1',
            borderLeft: '1px solid #c6c9d1',
            position: 'absolute',
            background: '#fff',
        },
    },
    select_slot_object: {
        width: '90%',
        height: '25%',
        paddingTop: '25px',

        display: 'flex',
        margin: 'auto',
        justifyContent: 'space-between'

    },
    slot_object_amount: {
        width: '40%',
        display: 'flex',
        justifyContent: 'space-between',
        // paddingBottom: '5px',

    },
    // ---------------------------------

    button_search: {
        width: '10%',

    },
    button_searchIcon: {
        // padding        : '15px 5px 5px 5px',
        width: '50px',
        height: '30px',
        backgroundColor: '#DADADA',
        borderRadius: '3px',
    },
    //////////////////////////////////////////////////////////////Het header_left

    // ----------------------code button cancel check
    button_cancel_check: {
        width: '100%',
        display: 'flex',
        textAlign: 'right',
        justifyContent: 'flex-end',
        marginBottom: '5px',

    },
    button_cancel: {
        marginRight: '15px',
        paddingTop: '2px',

    },
    button_check: {
        padding: '3px 10px 0px 10px',
        backgroundColor: '#f77307',
        borderRadius: '30px',


    }

}));

export default function HeaderLeftInput() {
    const classes = useStyles();
    // const [selectedDate, handleDateChange] = React.useState<DateRange<Date>>([null, null]);
    return (

        <div className={classes.header_left}>
            <div className={classes.header_logo}>
                <Avatar alt="" src="https://www.luxstay.com/blog/wp-content/uploads/2018/09/Logo-Final-hinh-hieu-den.png" />

            </div>
            <div className={classes.header_input}>
                <Box className={classes.boxSearch} >
                    <SearchIcon color='disabled' />
                    <InputBase

                        className={classes.input}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Box>
                <Divider className={classes.divider} orientation="vertical" />

                <Button
                    className={classes.button_date}
                    startIcon={<CalendarTodayIcon />}
                >
                    Ngày
                                    <Box className={classes.header_select_date}>
                        <RangeDate />
                    </Box>

                </Button>
                <Divider className={classes.divider} orientation="vertical" />
                <Button
                    className={classes.button_slot}
                    startIcon={<PeopleAltIcon />}
                >
                    Số khách
                                        <Box className={classes.select_slot}>
                        <Box className={classes.select_slot_object}>
                            <Typography>Người lớn</Typography>
                            <Box className={classes.slot_object_amount}>
                                <RemoveCircleOutlineIcon fontSize="large" color="action" />
                                <Typography variant="h5">
                                    0
                                                </Typography>
                                <AddCircleOutlineIcon fontSize="large" color="action" />

                            </Box>
                        </Box>
                        <Box className={classes.select_slot_object}>
                            <Typography >
                                Trẻ em <br />

                            </Typography>
                            <Box className={classes.slot_object_amount}>
                                <RemoveCircleOutlineIcon fontSize="large" color="action" />
                                <Typography variant="h5">
                                    0
                                                </Typography>
                                <AddCircleOutlineIcon fontSize="large" color="action" />

                            </Box>
                        </Box>
                        <Box className={classes.select_slot_object}>
                            <Typography >
                                Trẻ sơ sinh <br />

                            </Typography>
                            <Box className={classes.slot_object_amount}>
                                <RemoveCircleOutlineIcon fontSize="large" color="action" />
                                <Typography variant="h5">
                                    0
                                                </Typography>
                                <AddCircleOutlineIcon fontSize="large" color="action" />

                            </Box>
                        </Box>
                        <Box className={classes.select_slot_object}>
                            <div className={classes.button_cancel_check}>
                                <Typography color="textSecondary" className={classes.button_cancel}>
                                    Hủy
                                        </Typography>
                                <Typography color="textSecondary" className={classes.button_check}>
                                    Áp dụng
                                            </Typography>
                            </div>

                        </Box>
                    </Box>
                </Button>

                <Divider className={classes.divider} orientation="vertical" />

                <Button className={classes.button_search}>
                    <SearchIcon
                        className={classes.button_searchIcon}
                        color="white"
                    />
                </Button>


            </div>
        </div>



    )
}
