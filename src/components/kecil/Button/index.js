import React from 'react';
import { Button } from 'react-bootstrap';

const Buttonn = ({ title, onClick, loading }) => {
    if (loading) {
        return <Button style={btn} variant="secondary">Loading ...</Button>
    }
    return (
        <Button style={btn} variant="success" onClick={onClick}>{title}</Button>
    )
}

export default Buttonn;
const btn = {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%'
}