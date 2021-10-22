import React, { Component } from 'react';
import { Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Buttonn from '../../components/kecil/Button';
import { registerUserAPI } from '../../config/redux/action';



class Register extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = async () => {
        const { email, password } = this.state;
        const { history } = this.props;
        const res = await this.props.registerAPI({ email, password }).catch(err => err);
        if (res) {
            this.setState({
                email: '',
                password: '',
            })
            history.push('/login')
        }
    }

    render() {
        return (
            <div>
                <Container fluid='xl'>
                    <Row
                        className="justify-content-md-center"
                    >
                        <Col sm={4}>
                            <Card>
                                <Card.Img
                                    className="mt-4"
                                    style={gambar}
                                    variant="top"
                                    src="https://cdn-icons-png.flaticon.com/512/3884/3884465.png"
                                />
                                <Form>
                                    <Form.Group className="m-4" controlId="formBasicEmail">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email"
                                        >
                                            <Form.Control
                                                id='email'
                                                placeholder='Email'
                                                type='text'
                                                onChange={this.handleChangeText}
                                                value={this.state.email}
                                            />
                                        </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group className="m-4" controlId="formBasicPassword">
                                        <FloatingLabel controlId="floatingPassword" label="Password">
                                            <Form.Control
                                                size="sm"
                                                id='password'
                                                placeholder='Password'
                                                type='password'
                                                onChange={this.handleChangeText}
                                                value={this.state.password}
                                            />
                                        </FloatingLabel>
                                    </Form.Group>

                                </Form>
                                <Buttonn
                                    onClick={this.handleRegisterSubmit}
                                    title='Register'
                                    loading={this.props.isLoading} />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);

const gambar = {
    height: '10%',
    width: '10%',
    marginLeft: 'auto',
    marginRight: 'auto'
}
