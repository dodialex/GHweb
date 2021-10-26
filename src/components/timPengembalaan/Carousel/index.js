import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousell = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365__340.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>PS.German Hutabara & Ibu Diana</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/06/22/08/38/siblings-817369__340.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>PS.Fatao & Ibu Tanty</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2016/11/14/03/16/book-1822474__340.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>PS.Ricky & Ibu Lisa </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousell;