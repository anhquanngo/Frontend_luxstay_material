import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Grid, AppBar, Typography, AntTab, AntTabs, Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    header: {
        height: '85px',
        // width:'95%',
        // margin:'0px auto',
        backgroundColor: '#FFFFFF',
    },
    header_right: {
        display: 'flex',
        justifyContent: 'space-around',

    },
    header_text_title: {
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 700,
        color: '#999999',
    },
    header_text_name: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 700,
        color: '#333333'
    },
    page_user_tab: {

    }
}));
export default function User() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <React.Fragment>
                <AppBar className={classes.header}>
                    <Toolbar>
                        <Grid container spacing={0} >
                            <Grid item md={8} sm={10} xs={10} className={classes.header__toolbar__left}>
                                VietStay
                            </Grid>
                            <Grid item md={4} sm={2} xs={2} className={classes.header_right} >
                                <Typography className={classes.header_text_title}>
                                    Hôm nay
                                        <Typography className={classes.header_text_name}>
                                        XX/XX/XXXX
                                        </Typography>
                                </Typography>
                                <Typography className={classes.header_text_title}>
                                    Tài khoản
                                        <Typography className={classes.header_text_name}>
                                        XX/XX/XXXX
                                        </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <Box className={classes.page_user_tab}>
                    <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                        <AntTab label="Tab 1" />
                        <AntTab label="Tab 2" />
                        <AntTab label="Tab 3" />
                    </AntTabs>
                </Box>
            </React.Fragment>
        </div>

    );

}
