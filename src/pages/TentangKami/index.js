import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { colors, weight } from '../../random';

const TentangKami = () => {
    return (
        <div id='tes'>
            <Container fluid style={container}>
                <Container>
                    <Row>
                        <p style={p}>Tentang Kami</p>
                        <Col></Col>
                        <Col md={8} style={p1}>
                            <p>Gereja Kasih Karunia Jemaat Haleluya adalah gereja yang bergerak dengan aliran Apostolik Profetik, yang bergerak dengan 5 fungsi jawatan gereja ,</p>
                            <p>yaitu : Kerasulan, Kenabian, Pengajar, Penginjil dan Penggembalaan.</p>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row md={2}>


                        <Col md={2}></Col>
                        <Col style={p1} md={4}>
                            <p style={p}>Visi</p>
                            <p>Gereja yang Kudus dan Misioner</p>
                        </Col>
                        <Col md={3}>
                            <p style={p}>Misi</p>
                            <p>------------------ </p>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default TentangKami;
const p = {
    fontSize: '35px',
    color: colors.text.primary,
    fontFamily: 'Poppins',
    fontWeight: weight.font.extraBold,
    textAlign: 'center',
    paddingTop: '10px',
    letterSpacing: '5px'
}
const p1 = {
    fontFamily: 'Poppins',
    fontWeight: weight.font.normal,
    textAlign: 'justify',
    fontSize: '17px',
}
const container = {
}
