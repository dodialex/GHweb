import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { weight } from '../../../random';

const Info = () => {
    return (
        <div>
            <Container fluid style={container}>
                <Row xs={1} md={2}>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />

                        <p style={p}>description</p>
                    </Col>
                    <Col>
                        <Image fluid
                            style={img}
                            src="https://live.staticflickr.com/65535/51632853894_a65955c254_z.jpg" />
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
const col = {
    alignItems: 'flex-end',
    justifyContent: 'center'
}
const img = {
    width: '100%',
    height: '100%'
}
const p = {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: weight.font.bold,
    fontSize: '30px'
}
