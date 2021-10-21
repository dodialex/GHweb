import React, { Component } from 'react';
import { Button, Card, Col, Container, Form, Row, FloatingLabel } from 'react-bootstrap';
import firebase from '../../config/firebase';



class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = () => {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('success: ', res);
            })
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage)
            });

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
                                                onChange={this.handleChangeText} />
                                        </FloatingLabel>
                                    </Form.Group>

                                </Form>
                                <Button
                                    className="mb-4"
                                    style={btn} variant="success"
                                    onClick={this.handleRegisterSubmit}
                                >
                                    Submit
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>











                {/* <p>Register Page</p>
                <input id='email' placeholder='Email' type='text' onChange={this.handleChangeText} />
                <input id='password' placeholder='Password' type='password' onChange={this.handleChangeText} />
                <button>Register</button>
                <button onClick={this.handleRegisterSubmit}>Go to Dashboard</button> */}
            </div>
        )
    }
}

export default Register;

const gambar = {
    height: '10%',
    width: '10%',
    marginLeft: 'auto',
    marginRight: 'auto'
}
const btn = {
    marginLeft: 'auto',
    marginRight: 'auto'
}