import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { colors } from '../../../random';
import './fotofoto.css';

const FotoFoto = ({ foto1, foto2, foto3, foto4, foto5, foto6 }) => {
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
                    <img alt='tarunaImg' src={foto1} />
                </div>
                <div>
                    <img alt='tarunaImg' src={foto2} />
                </div>
                <div>
                    <img alt='tarunaImg' src={foto3} />
                </div>
                <div>
                    <img alt='tarunaImg' src={foto4} />
                </div>
                <div>
                    <img alt='tarunaImg' src={foto5} />
                </div>
                <div>
                    <img alt='tarunaImg' src={foto6} />
                </div>
            </Slider>
        </div >
    )
}


export default FotoFoto;
const slickSlide = {
    backgroundColor: colors.background.grey
}

