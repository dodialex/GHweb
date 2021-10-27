import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Judul from '../../kecil/Judul';
const InfoPKS = ({ gambarPks, teksNamaPks, teksKontakPks }) => {
    return (
        <Container>
            <Row md={3} >
                <Col md={2}></Col>
                <Col md={8} >
                    <Image style={col}
                        src={gambarPks} />
                    <Judul teks={teksNamaPks} />
                    <Judul teksKontak={teksKontakPks} />
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}

export default InfoPKS;
const col = {
    width: '100%',
}
