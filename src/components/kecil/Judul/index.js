import React from 'react'
import { colors, weight } from '../../../random';

const Judul = ({ teks, teksKiri, teksKontak }) => {
    return (
        <div>
            <p style={p}>{teks}</p>
            <p style={pLeft}>{teksKiri}</p>
            <p style={description}>{teksKontak}</p>
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
const pLeft = {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: weight.font.bold,
    fontSize: '30px',
    color: colors.text.primary
}
const description = {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: weight.font.normal,
    fontSize: '20px',
    color: colors.text.primary,
    marginTop: '-3%'
}
