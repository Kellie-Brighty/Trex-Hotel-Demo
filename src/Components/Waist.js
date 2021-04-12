// import React, {useState} from 'react';
// import {SlideData} from './SlideData'; 
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import {makeStyles} from '@material-ui/core';

// import './imageSlider.css'

// const useStyles = makeStyles({
//     slider: {
//         position: 'relative',
//         height: '500px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
        
//     },
//     rightArrow: {
//         position: 'absolute',
//         top: '50%',
//         right: '32px',
//         fontSize: '3rem',
//         color: '#000',
//         zIndex: '10',
//         userSelect: 'none',
//         cursor: 'pointer'
//     },
//     leftArrow: {
//         position: 'absolute',
//         top: '50%',
//         left: '32px',
//         fontSize: '3rem',
//         color: '#000',
//         zIndex: '10',
//         userSelect: 'none',
//         cursor: 'pointer'
//     },
// });

// function ImageSlider({ slides }) {
//     const classes = useStyles();
//     const [current, setCurrent] = useState(0);
//     const length = slides.length

//     if(!Array.isArray(slides) || slides.length === 0) {
//         return null
//     }

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1 )
//     }
//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1 )
//     }

//     console.log(current)
//     return (
//         <section className={classes.slider} >
//             <ChevronLeftIcon className={classes.leftArrow} onClick={prevSlide} />
//             <ChevronRightIcon className={classes.rightArrow} onClick={nextSlide} />
//             {SlideData.map((image, index) => {
//                 return (
//                     <div className={index === current ? 'slideActive' : 'slide'} key={index} >
//                         {
//                             index === current && (
//                                 <img style={{maxWidth: '100%', maxHeight: '100%'}} src={image.image} alt=""/>
//                             )
//                         }
//                     </div>
//                 )
//             })}
//         </section>
//     )
// }

// export default ImageSlider


// import React from 'react';
// import Carousel from 'react-material-ui-carousel'
// import Item from './Item'

// function ImageSlider() {

//     const items = [
//         {
//             name: "Random Name #1",
//             description: "Probably the most random thing you have ever seen!"
//         },
//         {
//             name: "Random Name #2",
//             description: "Hello World!"
//         }
//     ]
//     return (
//             <Carousel>
//                 {
//                     items.map( (item, i) => <Item key={i} item={item} /> )
//                 }
//             </Carousel>
//         )
//     }
    
// export default ImageSlider


// import React, { useState } from 'react';
// import { Box, Slide } from '@material-ui/core';
// import { ThemeProvider } from '@material-ui/styles';
// import { createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({

//     transitions: {
//         easing: {
//             easeInOut: 'linear',
//             easeOut: 'linear',
//             easeIn: 'linear',
//             sharp: 'linear'
//         },
//     }
// });


// export default function Home() {

//     const [twoSlide, setTwoSlide] = useState(true);
//     const [oneSlide, setOneSlide] = useState(false);

//     function nextSlide() {
//         setOneSlide(prevState => !prevState);
//         setTwoSlide(prevState => !prevState);
//     }


//     return <Box>
//         <ThemeProvider theme={theme}>

//         <Box display={'flex'} flexDirection={'column'} style={{overflowX: "hidden", height: 400}}>

//             <button onClick={nextSlide}>Change slide</button>

//             <div style={{display: 'flex', width: '100%', position: 'relative'}}>

//                 <Slide style={{position: 'absolute'}} direction={"right"} in={oneSlide} mountOnEnter unmountOnExit timeout={1000}>
//                     <div style={{backgroundColor: 'green', width: '100%'}}>Slide one</div>
//                 </Slide>

//                 <Slide style={{position: 'absolute'}} direction={"left"} in={twoSlide} mountOnEnter unmountOnExit timeout={1000}>
//                     <div style={{backgroundColor: 'red', width: '100%'}}>Slide Two</div>
//                 </Slide>

//             </div>
//         </Box>
        
//         </ThemeProvider>

//     </Box>;
// }





// import React from "react";
// import { Carousel } from "react-responsive-carousel";

// export default () => (
//   <Carousel 
//     showArrows={false} 
//     autoPlay={true} 
//     showIndicators={false} 
//     transitionTime={500}
//     showStatus={false}
//     infiniteLoop={true}
//     emulateTouch={true}
//     dynamicHeight={false}
//     stopOnHover={false}
//     showThumbs={false}
//   >
//     <div>
//       <img alt="" src="dark theme bg.jpg" />
//       <p className="legend">Legend 1</p>
//     </div>
//     <div>
//       <img alt="" src="black bg.jpg" />
//       <p className="legend">Legend 2</p>
//     </div>
//     <div>
//       <img alt="" src="sample.jpg" />
//       <p className="legend">Legend 3</p>
//     </div>
//   </Carousel>
// );



// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class ImageSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       fade: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true
//     };
//     return (
//       <div>
//         <h2>Fade</h2>
//         <Slider {...settings}>
//           <div>
//             <img src='dark theme bg.jpg' />
//           </div>
//           <div>
//             <img src='black bg.jpg' />
//           </div>
//           <div>
//             <img src='sample.jpg' />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }



// import React from 'react';
// import { Fade } from 'react-slideshow-image';

// const fadeImages = [
//   'dark theme bg.jpg',
//   'bg.jpg',
//   'sample.jpg'
// ];

// const fadeProperties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: false,
//   indicators: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`fade transition from ${oldIndex} to ${newIndex}`);
//   }
// }

// function ImageSlider(){
//   return (
//     <div className="slide-container">
//       <Fade {...fadeProperties}>
//         <div className="each-fade">
//           <div className="image-container">
//             <img src={fadeImages[0]} />
//           </div>
//           <h2>First Slide</h2>
//         </div>
//         <div className="each-fade">
//           <div className="image-container">
//             <img src={fadeImages[1]} />
//           </div>
//           <h2>Second Slide</h2>
//         </div>
//         <div className="each-fade">
//           <div className="image-container">
//             <img src={fadeImages[2]} />
//           </div>
//           <h2>Third Slide</h2>
//         </div>
//       </Fade>
//     </div>
//   )
// }

// export default ImageSlider




Premium King Room
159$/Pernight
Size:	30 ft
Capacity:	Max persion 5
Bed:	King Beds
Services:	Wifi, Television, Bathroom,...