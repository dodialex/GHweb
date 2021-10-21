import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
                <p>Login Page{this.props.popupProps}</p>
                <Link to='/register'>
                    <button>Go to Register</button>
                </Link>
                <Link to='/dashboard'>
                    <button>Go to Dashboard</button>
                </Link>
            </div>
        )
    }
}

const reduxState = (state) => ({
    popupProps: state.popup
})

export default connect(reduxState, null)(Login);