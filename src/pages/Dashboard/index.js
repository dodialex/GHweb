import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDataToAPI } from '../../config/redux/action';

class Dashboard extends Component {
    state = {
        title: '',
        content: '',
        date: ''
    }

    handleSaveArtikel = () => {
        const { title, content } = this.state;
        const { saveArtikel } = this.props;
        const userData = JSON.parse(localStorage.getItem('userData')) //ini juga hapus

        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),

            userId: userData.uid //hapus juga ini
            // userId: this.props.userData.uid //uncomment kalo diatas dihapus
        }
        saveArtikel(data)
        console.log(data)
    }

    onInputChange = (e, type) => {
        this.setState({
            [type]: e.target.value
        })
    }

    render() {
        const { title, content } = this.state
        return (
            <div>
                <input placeholder='title' value={title} onChange={(e) => this.onInputChange(e, 'title')} />
                <textarea placeholder='content' value={content} onChange={(e) => this.onInputChange(e, 'content')}></textarea>
                <button onClick={this.handleSaveArtikel}>Simpan</button>






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
    userData: state.user
})

const reduxDispatch = (dispatch) => ({
    saveArtikel: (data) => dispatch(addDataToAPI(data))
})

export default connect(reduxState, reduxDispatch)(Dashboard);