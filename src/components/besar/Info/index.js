import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Judul from '../../kecil/Judul';

const Info = ({ teks, gambar, teksNama, teksKontak, gambarPks, teksNamaPks, teksKontakPks }) => {
    return (
        <div>
            <Container fluid style={container}>
                <Row xs={1} md={2}>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Judul teks={teks} />
                    </Col>
                    <Col>
                        <Image fluid
                            style={img}
                            src={gambar} />
                        <Judul teks={teksNama} />
                        <Judul teksKontak={teksKontak} />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Info;
const container = {
    paddingTop: '8%'
}
const img = {
    width: '100%',
    height: '100%'
}
