import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getDataFromAPI } from '../../config/redux/action';

class Artikel extends Component {

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.props.getArtikel(userData.uid);
    }
    render() {
        const { artikel } = this.props;
        console.log('artikel nya : ', artikel);
        return (
            <div>
                {
                    artikel.length > 0 ? (
                        <Fragment>
                            {
                                artikel.map(artikel => {
                                    return (
                                        <div keys={artikel.id}>
                                            <p>{artikel.data.title}</p>
                                            <p>{artikel.data.date}</p>
                                            <p>{artikel.data.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </Fragment>
                    ) : null
                }
            </div>
        )
    }
}

const reduxState = (state) => ({
    userData: state.user,
    artikel: state.artikel
})

const reduxDispatch = (dispatch) => ({
    getArtikel: (data) => dispatch(getDataFromAPI(data))
})

export default connect(reduxState, reduxDispatch)(Artikel);