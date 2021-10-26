import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { weight, colors } from '../../../random';

const CardJadwal = ({ judul, jadwal, jam }) => {
    return (
        <div>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/09/02/02/34/sunset-6592545__340.jpg" />
                    <Card.Body>
                        <Card.Title style={title}>{judul}</Card.Title>
                        <Card.Text style={teks}>{jadwal}</Card.Text>
                        <Card.Text style={teks1}>{jam}</Card.Text>
                    </Card.Body>
                    <Button style={btn} disabled></Button>
                </Card>
            </Container>
        </div>
    )
}

export default CardJadwal;
const title = {
    fontFamily: 'Poppins',
    fontWeight: weight.font.bold,
    color: colors.text.primary
}
const teks = {
    fontFamily: 'Poppins',
    fontWeight: weight.font.normal,
    color: colors.text.tertier
}
const teks1 = {
    fontFamily: 'Poppins',
    fontWeight: weight.font.light,
    color: colors.text.tertier,
    marginTop: '-6%'
}
const btn = {
    backgroundColor: colors.background.green,
    borderColor: colors.background.green
}
