import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { colors } from '../../random';
import './youth.css';

class Youth extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings} style={slickSlide}>
                    <div>
                        <img alt='tarunaImg' src='https://live.staticflickr.com/65535/51632820684_39ce316a21_z.jpg' />
                    </div>
                    <div>
                        <img alt='tarunaImg' src='https://live.staticflickr.com/65535/51632820719_3edd9a2b84_z.jpg' />
                    </div>
                    <div>
                        <img alt='tarunaImg' src='https://live.staticflickr.com/65535/51632171406_5e594a7bb0_z.jpg' />
                    </div>
                    <div>
                        <img alt='tarunaImg' src='https://live.staticflickr.com/65535/51632820799_7c0fe6300f_z.jpg' />
                    </div>
                    <div>
                        <img alt='tarunaImg' src='https://live.staticflickr.com/65535/51632397278_550c208055_z.jpg' />
                    </div>
                    <div>
                        <img alt='tarunaImg' src='https://live.staticflickr.com/65535/51632171386_803e59092d_z.jpg' />
                    </div>
                </Slider>
                <br />
                <p>sasasas</p>
            </div >
        )
    }
}

export default Youth;
const slickSlide = {
    backgroundColor: colors.background.grey
}