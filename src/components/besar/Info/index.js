import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Judul from '../../kecil/Judul';

const Info = () => {
    return (
        <div>
            <Container fluid style={container}>
                <Row>
                    <Col>
                        <Judul teks='Teens Gekari Haleluya' />
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
const img = {
    width: '100%',
    height: '100%'
}
