import React, { Component } from 'react'
import { Content } from '../../components/artikel'
import { Button, Container } from 'react-bootstrap'
import { colors, weight } from '../../random';

class IbadahOnline extends Component {
    render() {
        return (
            <div>
                <Container fluid style={container}>
                    <p style={p}>Ibadah Raya GEKARI Haleluya</p>
                </Container>
                <Content
                    judul='Penuaian Jiwa Besar'
                    tanggal='24 Oktober 2021'
                    linknya='https://www.youtube.com/embed/hgvtcijZGcE' />
                <Content
                    judul='Franky Kuncoro'
                    tanggal='17 Oktober 2021'
                    linknya='https://www.youtube.com/embed/UqwlYI3vCUM' />
                <Content
                    judul='Penuaian Terjadi Ketika Kita Pergi Memberitakan Injil'
                    tanggal='10 Oktober 2021'
                    linknya='https://www.youtube.com/embed/YNXb2p6KESw' />
                <Content
                    judul='Deklarasikan Penuaian Jiwa-jiwa'
                    tanggal='3 Oktober 2021'
                    linknya='https://www.youtube.com/embed/kJojcx6UHDE' />
                <Container style={container}>
                    <Button style={btn} href='https://www.youtube.com/channel/UCIrAwsqcpHsYhQ9YBJbhhtA' >Selengkapnya</Button>
                </Container>
            </div>
        )
    }
}

export default IbadahOnline;
const container = {
    textAlign: 'center',
}
const p = {
    fontFamily: 'Poppins',
    fontWeight: weight.font.bold,
    fontSize: 25,
    color: colors.text.tertier,
    paddingTop: '15px',
}
const btn = {
    backgroundColor: 'transparent',
    borderColor: colors.border.green,
    color: colors.text.primary,
    fontFamily: 'Poppins',
    fontWeight: weight.font.bold
}
