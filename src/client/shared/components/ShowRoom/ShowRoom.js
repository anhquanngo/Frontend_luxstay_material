import React from 'react';
import './StylesShowRoom.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Box from '@material-ui/core/Box';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Rating from '@material-ui/lab/Rating';
import Pagination from '@material-ui/lab/Pagination';





const useStyles = makeStyles((theme) => ({


    mainShowRoom: {
        marginTop: '25px',
        width: '95%',
        margin: 'auto',
    },
    formControl: {
        margin: theme.spacing(1),
        borderRadius: '5px',
        border: '1px solid rgba(209, 127, 127, 0.571)!important',

    },
    selectEmpty: {
        marginTop: theme.spacing(0),
    },
    show_room: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',


    },
    details_room: {

        [theme.breakpoints.up('1180')]: {
            maxWidth: '19%',

        },
        [theme.breakpoints.down('1180')]: {
            maxWidth: '24%',

        },
        [theme.breakpoints.down('960')]: {
            maxWidth: '50%',

        },
        marginTop: '15px',


    },
    species_room: {
        color: '#888888',
        fontWeight: '700',
    },
    room_link_detail: {
        display: 'flex',
    },
    name_room: {
        color: '#222',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '900',
        maxHeight: '52px',
        display: 'block',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',

        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&:hover': {
            color: '#f65e39',
            textDecoration: 'none',

        }
    },
    room_icon_fast: {
        fontSize: '20px',
        padding: '1px',
        backgroundColor: '#f65e39',
        borderRadius: '50%',
        display: 'inline-block',
        color: '#ffffff',
        marginRight: '5px',
    },
    room_price: {
        color: '#222222',
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '900',
        paddingTop: '5px',
    },
    room_location: {
        color: '#222222',
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '500',
    },
    room_vote_start: {
        color: '#FFB025',
        fontSize: '14px',
        lineHeight: '21px',
    },
    pagination_room:{
        marginTop: '70px',
        width: '27%',
        margin:' 0px auto',
    },

}));

export default function ListProducts() {
    const classes = useStyles();
    const [value, setValue] = React.useState(4, 5);
    const [state, setState] = React.useState({
        sort: '',

    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <React.Fragment >
            <div className={classes.mainShowRoom}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12} sm={8}>
                        <Typography variant="h5">
                            10282 homestay nổi bật tại Luxstay
                </Typography>
                    </Grid>
                    <Grid item md={6} xs={12} sm={4} align="right">
                        <FormControl className={classes.formControl}>
                            <Box>

                                <NativeSelect
                                    value={state.sort}
                                    onChange={handleChange}
                                    name="sort"
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'sort' }}
                                >

                                    <option value="">Sắp xếp</option>

                                    <option value={20}>Giá tăng dần</option>
                                    <option value={30}>Giá giảm dần</option>
                                </NativeSelect>
                            </Box>
                        </FormControl>
                    </Grid>
                </Grid>
                {/* ------------------------------------------------------------------------------------ */}
                <Box className={classes.show_room}>
                    {listrooms.map((listroom, id) => (

                        <Card className={classes.details_room} key={listroom.id}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    alt={listroom.title}

                                    image={listroom.img}
                                    title={listroom.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="overline" className={classes.species_room}>
                                        {listroom.species_room}
                                    </Typography>
                                    <a >
                                        <div className={classes.name_room}>
                                            <Tooltip title="Đặt phòng ngay không cần chủ nhà phê duyệt">
                                                <FlashOnIcon className={classes.room_icon_fast} />
                                            </Tooltip>
                                            {listroom.name}
                                        </div>
                                    </a>
                                    <Typography variant="body2">
                                        {listroom.guest} khách · {listroom.bedroom} phòng ngủ · {listroom.bathroom} phòng tắm
                                     </Typography>
                                    <Typography className={classes.room_price}>
                                        {listroom.price}₫/đêm
                                     </Typography>

                                    <Breadcrumbs separator="›" aria-label="breadcrumb">

                                        <Link href="/" >
                                            <Typography className={classes.room_location}>
                                                {listroom.location}
                                            </Typography>
                                        </Link>
                                        <Link href="/getting-started/installation/" >
                                            <Typography className={classes.room_location}>
                                                Hồ Chí Minh
                                    </Typography>
                                        </Link>
                                        <Link
                                            href="/components/breadcrumbs/"
                                        >
                                            <Typography className={classes.room_location}>
                                                Việt Nam
                                    </Typography>
                                        </Link>
                                    </Breadcrumbs>
                                    {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                                    <Rating name="half-rating-read" defaultValue={listroom.start} precision={0.5} readOnly size="small"/>


                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}



                </Box>
                <Box className={classes.pagination_room}>
                    <Pagination count={10} color="secondary"/>

                </Box>

            </div>
        </React.Fragment >


    )
}
const listrooms = [
    {
        id: '1',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '2',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '3',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '4',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '5',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '6',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '7',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '8',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '9',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '10',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '11',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '12',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '13',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '14',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '15',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '16',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '17',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '18',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '19',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
    {
        id: '20',
        img: 'https://cdn.luxstay.com/rooms/34370/large/room_34370_4_1570514075.jpg',
        title: 'Contemplative Reptile',
        species_room: 'CĂN HỘ STUDIO',
        fast_room: 'Yes',
        name: 'AimeeHomestay#2 - Phan Bội Châu/ Self check-in sang chảnh hihihi',
        guest: '4',
        bedroom: '1',
        bathroom: '1',
        price: '792,000',
        promotion: '0',
        location: 'Quận 1',
        start: 5,
    },
];

