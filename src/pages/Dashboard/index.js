import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <p>Login Page</p>
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

export default Dashboard;