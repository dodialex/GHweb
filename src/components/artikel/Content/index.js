import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { colors, weight } from '../../../random';

const Content = ({ linknya, title, judul, tanggal }) => {
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col sm={5} style={col1}>
                        <p style={p1}>{title}</p>
                        <p style={p2}>{judul}</p>
                        <p style={p3}>{tanggal}</p>
                    </Col>
                    <Col sm={3}></Col>
                    <Col sm={4}>
                        <iframe width='100%' src={linknya} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>

                </Row>
            </Container>
            <hr style={hr} />
        </Container>
    )
}

export default Content;
const col1 = {
    textAlign: 'center',
}
const p1 = {
    fontFamily: 'Poppins',
    fontWeight: weight.font.bold,
    fontSize: 25,
    color: colors.text.primary,
    paddingTop: '15px',
}
const p2 = {
    fontFamily: 'Poppins',
    fontWeight: weight.font.normal,
    fontSize: 20,
    color: colors.text.primary,
}
const p3 = {
    fontFamily: 'Poppins',
    fontWeight: weight.font.light,
    fontSize: 15,
    color: colors.text.primary,
}
const hr = {
    height: '2px',
    color: colors.border.green,
}
