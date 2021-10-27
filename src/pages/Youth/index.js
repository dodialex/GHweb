import React, { Component } from 'react';
import { colors } from '../../random';
import { Container } from 'react-bootstrap';
import { FotoFoto, Info } from '../../components/besar'
import { InfoPKS } from '../../components/besar';

class Youth extends Component {
    render() {
        return (
            <Container style={container} fluid>
                <div>
                    <FotoFoto
                        foto1='https://live.staticflickr.com/65535/51632820684_39ce316a21_z.jpg'
                        foto2='https://live.staticflickr.com/65535/51632820719_3edd9a2b84_z.jpg'
                        foto3='https://live.staticflickr.com/65535/51632171406_5e594a7bb0_z.jpg'
                        foto4='https://live.staticflickr.com/65535/51632820799_7c0fe6300f_z.jpg'
                        foto5='https://live.staticflickr.com/65535/51632397278_550c208055_z.jpg'
                        foto6='https://live.staticflickr.com/65535/51632171386_803e59092d_z.jpg' />
                </div>
                <Info
                    teks='Youth Gekari'
                    gambar="https://live.staticflickr.com/65535/51632853894_a65955c254_z.jpg" />
                <hr />
                <InfoPKS
                    gambarPks='https://live.staticflickr.com/65535/51632853894_a65955c254_z.jpg'
                    teksNamaPks='Nama PKS'
                    teksKontakPks='Kontak PKS' />
                <InfoPKS
                    gambarPks='https://live.staticflickr.com/65535/51632853894_a65955c254_z.jpg'
                    teksNamaPks='Nama PKS'
                    teksKontakPks='Kontak PKS' />
                <InfoPKS
                    gambarPks='https://live.staticflickr.com/65535/51632853894_a65955c254_z.jpg'
                    teksNamaPks='Nama PKS'
                    teksKontakPks='Kontak PKS' />
            </Container >
        )
    }
}

export default Youth;
const container = {
    backgroundColor: colors.background.grey
}