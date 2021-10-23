import React, { Component } from 'react';
import { Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Buttonn from '../../components/kecil/Button';
import { loginUserAPI } from '../../config/redux/action';



class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleLoginSubmit = async () => {
        // const { email, password } = this.state;
        const { history } = this.props;
        // const res = await this.props.loginAPI({ email, password }).catch(err => err);
        // if (res) {
        //     console.log('login sukses')
        //     localStorage.setItem('userData', JSON.stringify(res)) //hapus dan di login juga
        //     this.setState({
        //         email: '',
        //         password: '',
        //     })
        history.push('/')
        // } else {
        //     console.log('login failed')
        // }
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
                                    onClick={this.handleLoginSubmit}
                                    title='Login'
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
    loginAPI: (data) => dispatch(loginUserAPI(data))
})




export default connect(reduxState, reduxDispatch)(Login);
const gambar = {
    height: '10%',
    width: '10%',
    marginLeft: 'auto',
    marginRight: 'auto'
}
