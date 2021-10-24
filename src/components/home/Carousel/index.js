import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap'
import { colors, weight } from '../../../random';

const Carousell = () => {

    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        style={caro}
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/ghweb-a3148.appspot.com/o/dailyDevotion.png?alt=media&token=6812ace4-76b0-4b70-95ed-42f43cfdf0be"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={caro}
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/ghweb-a3148.appspot.com/o/mezbahDoaPagi.png?alt=media&token=1275ba37-7d58-4cb4-bfa7-31e66a850cbd"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={caro}
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/ghweb-a3148.appspot.com/o/mezbahDoaMalam.png?alt=media&token=91a8747f-6fa0-4476-8064-9a392e4a336e"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={caro}
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/ghweb-a3148.appspot.com/o/praiseAndWorship.png?alt=media&token=c5c4213a-377b-4034-8fef-7d90813bc0c6"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container fluid style={container}>
                <Container>
                    <Row style={row} className="justify-content-md-center">
                        <p>Selamat Datang</p>
                        <p>di</p>
                        <p>Gekari Haleluya</p>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Carousell;
const row = {
    fontSize: '40px',
    color: colors.text.primary,
    fontFamily: 'Poppins',
    fontWeight: weight.font.extraBold,
    textAlign: 'center',
    paddingTop: '10px',
    letterSpacing: '10px'
}
const container = {
    backgroundColor: colors.background.grey,

}
const caro = {
    height: '360px'
}