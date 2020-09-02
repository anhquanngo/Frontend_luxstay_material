import React from 'react'
import Slider from "react-slick";
import './SlideRoom.css'


function SlideRoom(props) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div style={{ marginTop: 83 }}>
            <div className={'slick_slider_list'}>
                <Slider {...settings}>
                    <div>
                        <div className={'slider_element'}>
                            <img className={'slider_element_img'} src="https://cdn.luxstay.com/rooms/36932/large/IMG-0034.JPG" />
                        </div>
                    </div>
                    <div>
                        <div className={'slider_element'}>
                            <img className={'slider_element_img'} src="https://cdn.luxstay.com/rooms/36932/large/IMG-0005.JPG" />
                        </div>
                    </div>
                    <div>
                        <div className={'slider_element'}>
                            <img className={'slider_element_img'} src="https://cdn.luxstay.com/rooms/36932/large/74214599_2850213194990499_1845373737138913280_o.jpg" />
                        </div>
                    </div>
                    <div>
                        <div className={'slider_element'}>
                            <img className={'slider_element_img'} src="https://cdn.luxstay.com/rooms/36932/large/IMG-0008.JPG" />
                        </div>
                    </div>
                    <div>
                        <div className={'slider_element'}>
                            <img className={'slider_element_img'} src="https://cdn.luxstay.com/rooms/36932/large/IMG-0006.JPG" />
                        </div>
                    </div>
                    <div>
                        <div className={'slider_element'}>
                            <img className={'slider_element_img'} src="https://cdn.luxstay.com/rooms/36932/large/Screenshot_5.png" />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}



export default SlideRoom

