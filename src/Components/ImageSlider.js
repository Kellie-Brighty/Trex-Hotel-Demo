import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {makeStyles, TextField} from '@material-ui/core';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './imageSlider.css'

const useStyles = makeStyles({
    carousel: {
        height: '600px',
    },
    img: {
        height: '600px'
    },
    caption: {
        color: 'white',
        position: 'absolute',
        left: '130px',
        top: '18em',
        textAlign: 'left',
        width: '43%',
        '& h3': {
            fontSize: '70px',
        },
        '& p': {
            marginTop: '30px',
            fontSize: '18px',
        }
    },
    overlay: {
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    CarouselForm: {
        backgroundColor: 'white',
        padding: '30px',
        position: 'absolute',
        right: '6em',
        top: '50%',
        zIndex: '10',
        textAlign: 'center'
    }
});

function ImageSlider() {
    const classes = useStyles();
    const [startDate, setStartDate] = useState(null);
    return (
        <div className={classes.carousel} >
            <Carousel fade controls={false} touch={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="hotel3.jpg"
                    alt="First slide"
                    />
                    <div className={classes.overlay} >
                        <Carousel.Caption className={classes.caption} >
                        <h3>Trex A Luxury Hotel</h3>
                        <p >
                        Enjoy a nice time with your partner.</p>

                        <button className='btnCarousel' >Discover More</button>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="hotel2.jpg"
                    alt="Second slide"
                    />

                    <div className={classes.overlay} >
                        <Carousel.Caption className={classes.caption} >
                        <h3 >Trex A Luxury Hotel</h3>
                        <p >
                        Topnotch suites for topnotch families</p>

                        <button className='btnCarousel' >Discover More</button>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="hotel1.jpg"
                    alt="Third slide"
                    />

                    <div className={classes.overlay} >
                        <Carousel.Caption className={classes.caption} >
                        <h3 >Trex A Luxury Hotel</h3>
                        <p >
                        Here are the best hotel booking sites, including recommendations for international travel and for finding low-priced hotel rooms.</p>

                        <button className='btnCarousel' >Discover More</button>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>

            <div className={classes.CarouselForm} >
                <h1 style={{marginBottom: '30px'}} >Book Your Hotel Room</h1>
                <form action="">
                    <DatePicker style={{margin: '0px auto', width: '90%' }} selected={startDate} onChange={date => setStartDate(date)} />
                </form>
            </div>

        </div>
    )
}

export default ImageSlider
