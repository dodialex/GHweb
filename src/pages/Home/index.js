import React, { Component } from 'react';
import { Carousell, CardJadwal } from '../../components/home';
import { Container, Row, Col } from 'react-bootstrap';
import { weight } from '../../random';

class Home extends Component {
    render() {
        return (
            <div>
                <Carousell />
                <p style={p}>Ibadah Dalam Sepekan</p>
                <Container>
                    <Row style={row2}>
                        <Col md={4}></Col>
                        <Col md={4}>
                            <CardJadwal judul='Daily Devotion' jadwal='Senin - Jumat' />
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                    <Row style={row2} md={3} xs={1}>
                        <Col style={col1}>
                            <CardJadwal judul='Mezbah Doa Pagi' jadwal='Senin - Jumat' jam='05.30 WIB' />
                        </Col>
                        <Col style={col1}>
                            <CardJadwal judul='Mezbah Doa Malam' jadwal='Senin - Kamis' jam='19.00 WIB' />
                        </Col>
                        <Col style={col1}>
                            <CardJadwal judul='Worship Night' jadwal='Jumat' jam='19.00 WIB' />
                        </Col>
                    </Row>
                    <Row style={row2}>
                        <Col md={4}></Col>
                        <Col md={4} style={col2}>
                            <CardJadwal judul='Ibadah Raya' jadwal='Minggu' jam='07.00 WIB, 09.00 WIB, 17.00 WIB' />
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;
const p = {
    textAlign: 'center',
    paddingTop: '10%',
    fontFamily: 'Poppins',
    fontWeight: weight.font.bold,
    fontSize: '30px'
}
const row2 = {
    margin: '3%',
}
const col1 = {
    marginBottom: '3%'
}
const col2 = {
    marginTop: '-3%'
}
