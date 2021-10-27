import React from 'react'
import { weight } from '../../../random';

const Judul = ({ teks }) => {
    return (
        <div>
            <p style={p}>{teks}</p>
        </div>
    )
}

export default Judul;
const p = {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: weight.font.bold,
    fontSize: '30px'
}
