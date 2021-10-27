import React from 'react';
import { Container } from 'react-bootstrap';
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
        slidesToScroll: 1,
    };
    return (
        <Container fluid style={container}>
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
        </Container>
    )
}


export default FotoFoto;
const slickSlide = {
    backgroundColor: colors.background.grey,
}
const container = {
    marginLeft: '-0.5px'
}