import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    slider: {
        margin: '0px auto',
        width: '80%',
        marginBottom: '50px'
    }
});

function Testimonials() {
    const classes = useStyles();

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true
    }

    return (
        <div  className={classes.slider} >
        <div style={{textAlign: 'center'}} >
            <h2>Testimonials</h2>
            <h1>What People Say About TrexHotel</h1>
        </div>
        <Slider {...settings}>
            <div >
                <p style={{textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni repellat a vero facere impedit voluptates in delectus, corrupti maiores, architecto soluta ratione laudantium, numquam assumenda natus mollitia illum et?</p>
            </div>
            <div >
                <p style={{textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni repellat a vero facere impedit voluptates in delectus, corrupti maiores, architecto soluta ratione laudantium, numquam assumenda natus mollitia illum et?</p>
            </div>
            <div >
                <p style={{textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni repellat a vero facere impedit voluptates in delectus, corrupti maiores, architecto soluta ratione laudantium, numquam assumenda natus mollitia illum et?</p>
            </div>
        </Slider >
        </div>
    )
}

export default Testimonials
