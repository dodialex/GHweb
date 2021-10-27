import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';


class HaleluyaMinistry extends Component {
    render() {
        return (
            <div>
                <Parallax blur={10} bgImage="https://media0.giphy.com/media/lYgsRPkt16EL5U2fvR/200w.webp?cid=ecf05e47nq2r4lqdplv5eftoqew11wf9ktrw1nq1j2qnk35k&rid=200w.webp&ct=g" bgImageAlt="the cat" strength={200}>
                    <Container>
                        <Row md={3} xs={1}>
                            <Col md={2}></Col>
                            <Col md={8} >
                                <iframe style={col} src="https://www.youtube.com/embed/mCLLT3FqKTA" width="100%" height="300" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                            <Col md={2}></Col>
                        </Row>
                    </Container>
                </Parallax>

            </div>
        )
    }
}

export default HaleluyaMinistry;
const col = {
    paddingTop: '1%',


}
