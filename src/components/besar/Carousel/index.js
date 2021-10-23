import React from 'react';
import Slider from "react-slick";

const Carousell = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img style={img} src='https://cdn.pixabay.com/photo/2021/09/02/02/34/sunset-6592545__340.jpg' />
                </div>
                <div>
                    <img style={img} src='https://cdn.pixabay.com/photo/2021/10/02/18/49/square-6676128__340.jpg' />
                </div>
                <div>
                    <img style={img} src='https://cdn.pixabay.com/photo/2021/04/13/02/28/wine-6174460__340.jpg' />
                </div>
                <div>
                    <img style={img} src='https://cdn.pixabay.com/photo/2020/07/15/08/40/deer-5406930__340.jpg' />
                </div>
                <div>
                    <img style={img} src='https://cdn.pixabay.com/photo/2021/08/26/15/18/mountain-6576362__340.jpg' />
                </div>
                <div>
                    <img style={img} src='https://cdn.pixabay.com/photo/2021/10/02/08/31/apples-6674608__340.jpg' />
                </div>
            </Slider>
        </div>
    )
}

export default Carousell;
const img = {
    width: '100%',
    height: '28.125rem'
}
