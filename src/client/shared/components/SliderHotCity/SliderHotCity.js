import React, { Component } from 'react';
import Slider from 'react-slick';
// import '../../../../node_modules/slick-carousel/slick/slick.css';
import { makeStyles } from '@material-ui/core/styles';
// import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import './SliderHotCity.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function SliderHotCity() {


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className={'slider_hot_city'}>
      <div className={'slider_title'} >
        <h6 style={{ color: "#222222" }}>Địa điểm nổi bật</h6>
        <p style={{ color: "#222222" }}>Cùng Vietprostay bắt đầu chuyến hành trình chinh phục thế giới của bạn

</p>
      </div>
      <div className={'slick_slider_list'}>
        <Slider {...settings} className={'slider_list'}>
          <div className={'slider_element'} >
            <img className={'slider_element_img'} src="https://cdn.luxstay.com/home/location/location_1_1559734709.png" />
            <div className={'slider_element_title'}>
              <h6>Hà Nội</h6>
              <p>xxxx Chỗ ở</p>
            </div>
          </div>
          <div className={'slider_element'}>
            <img className={'slider_element_img'} src="https://cdn.luxstay.com/home/location/location_5_1559735011.png" />

            <div className={'slider_element_title'}>
              <h6>TP.Hồ Chí Minh</h6>
              <p>xxxx Chỗ ở</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img className={'slider_element_img'} src="https://cdn.luxstay.com/home/location/location_10_1559303118.png" />

            <div className={'slider_element_title'}>
              <h6>Vũng Tàu</h6>
              <p>xxxx Chỗ ở</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img className={'slider_element_img'} src="https://cdn.luxstay.com/home/location/location_16_1559303173.png" />

            <div className={'slider_element_title'}>
              <h6>Đà Nẵng</h6>
              <p>xxxx Chỗ ở</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img className={'slider_element_img'} src="https://cdn.luxstay.com/home/location/location_4_1559786177.png" />

            <div className={'slider_element_title'}>
              <h6>Đà Lạt</h6>
              <p>xxxx Chỗ ở</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img className={'slider_element_img'} src="https://cdn.luxstay.com/home/location/location_1_1559373089.png" />
            <div className={'slider_element_title'}>
              <h6>Nha Trang</h6>
              <p>xxxx Chỗ ở</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img className={'slider_element_img'} src="https://cdn.luxstay.com/home/location/location_5_1559786196.png" />
            <div className={'slider_element_title'}>
              <h6>Quảng Ninh</h6>
              <p>xxxx Chỗ ở</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img className={'slider_element_img'} src="https://cdn.luxstay.com/home/location/location_6_1559786202.png" />
            <div className={'slider_element_title'}>
              <h6>Hội An</h6>
              <p>xxxx Chỗ ở</p>

            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
