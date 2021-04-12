import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {AppBar, Avatar, Divider, makeStyles, TextField, Toolbar} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ImageSlider from './ImageSlider';
import RoomIcon from '@material-ui/icons/RoomOutlined';
import WeekendIcon from '@material-ui/icons/WeekendOutlined';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcardOutlined';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import LocalLaundryServiceOutlinedIcon from '@material-ui/icons/LocalLaundryServiceOutlined';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import './home.css'
import Testimonials from './Testimonials';

const useStyles = makeStyles({
    header: {
        height: '42px',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: '.8s'
    },
    appBar: {
        height: '100px',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        transition: '.8s',
        boxShadow: 'none',
        margin: '0px auto',
        '& a': {
            color: 'black',
            textDecoration: 'none',
           
        }
      },
      appBarScroll: {
        backgroundColor: 'rgba(0, 0, 0, 0.699)',
        height: '100px',
        justifyContent: 'center',
        transition: '1s',
        margin: '0px auto',
        position: 'fixed',
        top: '0',
        '& a': {
            color: 'white',
            textDecoration: 'none',
            
        }
      },
      aboutSection: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '299px',
          marginBottom: '69px',
          padding: '80px 50px',
          transition: '.5s'
        },
        services: {
            textAlign: 'center',
            padding: '50px',
            transition: '.5s'
        },
        gallery: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0px',
            transition: '.5s',
        },
        slider: {
            margin: '0px auto',
            transition: '.5s',
            padding: '20px 50px'
        },
        mainSlides: {
            margin: '0px auto',
            width: '80%'
        },
        blogSection: {
            textAlign: 'center',
            paddingTop: '50px',
            transition: '.5s'
        },
        blogSectionGallery: {
            display: 'flex',
            alignItems: 'center',
            margin: '0px auto',
            width: '90%',
            '& img': {
                width: '500px'
            }
        },
        imgOne: {
            backgroundImage: 'url("nature1.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '400px',
            height: '500px',
            borderRadius: '10px',
            margin: '0px 10px'
        },    
        imgTwo: {
            backgroundImage: 'url("nature2.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '400px',
            height: '500px',
            borderRadius: '10px',
            margin: '0px 10px'
        },    
        imgThree: {
            backgroundImage: 'url("nature3.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '400px',
            height: '500px',
            borderRadius: '10px',
            margin: '0px 10px'
        },    
        imgFour: {
            backgroundImage: 'url("nature4.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '400px',
            height: '500px',
            borderRadius: '10px',
            margin: '0px 10px'
        },    
        imgFive: {
            backgroundImage: 'url("nature5.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '400px',
            height: '500px',
            borderRadius: '10px',
            margin: '0px 10px'
        },    
        innerFooter: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
});

const Title = styled.h1`
    color: ${props => props.theme.titleColor}
`
const Header = styled.header`
    background-color: ${props => props.theme.headerColor};
    color: ${props => props.theme.whiteColor}
`
const Button = styled.button`
    background-color: ${props => props.theme.button};
    color: ${props => props.theme.whiteColor}
`
const Logo = styled.h2`
    color: ${props => props.theme.logoColor}
`
const About = styled.div`
    background-color: ${props => props.theme.aboutSection}
`
const AboutTitle = styled.h4`
    color: ${props => props.theme.aboutSectionText}
`
const AboutParag = styled.p`
    color: ${props => props.theme.aboutSectionText}
`
const AboutImage = styled.img`
    box-shadow: ${props => props.theme.aboutImage}
`
const AboutBtn = styled.button`
    color: ${props => props.theme.aboutBtn}
`
const Service = styled.div`
    background-color: ${props => props.theme.aboutSection}
`
const Gallery = styled.div`
    background-color: ${props => props.theme.aboutSection}
`
const Testimonial = styled.div`
    background-color: ${props => props.theme.aboutSection}
`
const Footer = styled.footer`
    background-color: ${props => props.theme.footerBg}
`
const FooterText = styled.p`
    color: ${props => props.theme.footerText}
`
const BelowFooter = styled.footer`
    background-color: ${props => props.theme.belowFooter}
`
const FooterLink = styled.a`
    color: ${props => props.theme.footerLink}
`

function Home(props) {
    const classes = useStyles();

    const changeTheme = () => {
        if(props.theme === 'light') {
            props.setTheme('dark')
        } else {
            props.setTheme('light')
        }
    }

    const [navBackground, setNavBackground] = useState('appBar')
      const navRef = React.useRef()
      navRef.current = navBackground
      useEffect(() => {
          const handleScroll = () => {
              const show = window.scrollY > 50
              if (show) {
                  setNavBackground('appBarScroll')
              } else {
                  setNavBackground('appBar')
              }
          }
          document.addEventListener('scroll', handleScroll)
          return () => {
              document.removeEventListener('scroll', handleScroll)
          }
      }, [])

    const btn = props.theme === 'light' ? <Brightness3Icon style={{fontSize: '30px', color: '#FF9233'}} /> : <WbSunnyIcon style={{fontSize: '30px', color: '#FF9233'}} />

    const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        )
       
    }
   

    const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "black",}}
        onClick={onClick}
        />
    )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        nextArrow: <SampleNextArrow  />,
        prevArrow: <SamplePrevArrow />
    }

    
    return (
        <div style={{backgroundColor: '#E7E7E7'}}>
            <Header className={classes.header} >
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', margin: '0px 50px'}} ><PhoneIcon/> +234 9052926964</div>
                    <div style={{display: 'flex', alignItems: 'center', margin: '0px 50px'}}><EmailIcon/>trexroom@gmail.com</div>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{margin: '0px 20px', cursor: 'pointer'}} ><FacebookIcon /></div>
                    <div style={{margin: '0px 20px', cursor: 'pointer'}}><TwitterIcon /></div>
                    <div style={{margin: '0px 20px', cursor: 'pointer'}}><TelegramIcon /></div>
                    <div style={{margin: '0px 20px', cursor: 'pointer'}}><InstagramIcon /></div>

                    <Button style={{padding: '8px 40px',paddingTop: '11px', border: 'none', fontWeight: 'bolder', outline: 'none', cursor: 'pointer', marginRight: '30px'}} >Book Now</Button>

                    
                </div>
            </Header>
            <AppBar position="static" className={classes[navRef.current]} >
                <Toolbar style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 80px'}} >
                    <h2 style={{fontFamily: 'Montserrat Alternates', fontWeight: 'bolder', color: '#FF9233' }} >TrexHotelDemo</h2>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <a style={{margin: '0px 20px', fontSize: '18px'}} href="#">Home</a>
                        <a style={{margin: '0px 20px', fontSize: '18px'}} href="#">Rooms</a>
                        <a style={{margin: '0px 20px', fontSize: '18px'}} href="#">About Us</a>
                        <a style={{margin: '0px 20px', fontSize: '18px'}} href="#">Pages</a>
                        <a style={{margin: '0px 20px', fontSize: '18px'}} href="#">News</a>
                        <a style={{margin: '0px 20px', fontSize: '18px'}} href="#">Contact</a>
                        <div style={{marginRight: '50px', cursor: 'pointer'}} onClick={changeTheme} >{btn}</div>
                    </div>
                </Toolbar>
            </AppBar>

            <ImageSlider />

            <About className={classes.aboutSection} >
                <div style={{textAlign: 'center'}} >
                    <AboutTitle style={{color: '#FF9233'}} >About Us</AboutTitle>
                    <AboutTitle style={{fontSize: '30px', fontWeight: 'bold'}} >Intercontinental LA
                        Westlake Hotel</AboutTitle>
                    <AboutParag style={{width: '450px'}} >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae reiciendis eum porro nulla veniam, neque voluptatum laudantium quas vero, recusandae, similique sequi soluta! Totam harum, sit enim officiis quod pariatur!<br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae reiciendis eum porro nulla veniam, neque voluptatum laudantium quas vero.
                    </AboutParag>

                    <AboutBtn className='btnAbout' >Discover More</AboutBtn>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginLeft: '50px' }} >
                    <AboutImage style={{margin: '0px 20px' }} src="hotelImg1.jpg" alt=""/>
                    <AboutImage style={{margin: '0px 20px' }} src="hotelImg2.jpg" alt=""/>
                </div>
            </About>

            <Divider variant='fullWidth' style={{marginBottom: '30px', borderColor: 'black', marginTop: '-100px', zIndex: '2'}} />

            <Service className={classes.services} >
                <h4 style={{color: '#FF9233', marginBottom: '30px'}} >WHAT WE DO</h4>
                <AboutTitle>Discover Our Services</AboutTitle>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px'}} >
                    <div className='divBox' >
                        <RoomIcon className='icon'  />
                        <AboutTitle style={{fontWeight: 'bold'}} >Traveling Plan</AboutTitle>
                        <AboutParag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint voluptas a obcaecati quae quisquam excepturi ab, sit rem ratione omnis atque architecto corrupti ipsa quis nulla, quam recusandae ducimus.</AboutParag>
                    </div>
                    <div className='divBox' >
                        <CardGiftcardIcon className='icon'  />
                        <AboutTitle style={{fontWeight: 'bold'}} >Catering Services</AboutTitle>
                        <AboutParag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint voluptas a obcaecati quae quisquam excepturi ab, sit rem ratione omnis atque architecto corrupti ipsa quis nulla, quam recusandae ducimus.</AboutParag>
                    </div>
                    <div className='divBox' >
                        <WeekendIcon className='icon'  />
                        <AboutTitle style={{fontWeight: 'bold'}} >Babysitting</AboutTitle>
                        <AboutParag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint voluptas a obcaecati quae quisquam excepturi ab, sit rem ratione omnis atque architecto corrupti ipsa quis nulla, quam recusandae ducimus.</AboutParag>
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px'}} >
                    <div className='divBox' >
                        <LocalLaundryServiceOutlinedIcon className='icon'  />
                        <AboutTitle style={{fontWeight: 'bold'}} >Laundry</AboutTitle>
                        <AboutParag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint voluptas a obcaecati quae quisquam excepturi ab, sit rem ratione omnis atque architecto corrupti ipsa quis nulla, quam recusandae ducimus.</AboutParag>
                    </div>
                    <div className='divBox' >
                        <DriveEtaOutlinedIcon className='icon'  />
                        <AboutTitle style={{fontWeight: 'bold'}} >Hire Driver</AboutTitle>
                        <AboutParag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint voluptas a obcaecati quae quisquam excepturi ab, sit rem ratione omnis atque architecto corrupti ipsa quis nulla, quam recusandae ducimus.</AboutParag>
                    </div>
                    <div className='divBox' >
                        <LocalBarOutlinedIcon className='icon'  />
                        <AboutTitle style={{fontWeight: 'bold'}} >Bar & Drink</AboutTitle>
                        <AboutParag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint voluptas a obcaecati quae quisquam excepturi ab, sit rem ratione omnis atque architecto corrupti ipsa quis nulla, quam recusandae ducimus.</AboutParag>
                    </div>
                </div>
            </Service>

            <Gallery className={classes.gallery} > 
                <div style={{backgroundImage: 'url("hotelroom1.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px', width: '350px', backgroundPosition: 'center', margin: '10px' }} >
                    <div className='galleryOverlayBox' >
                        <div className='galleryWholeText' >
                            <h2>Double Room</h2>
                            <h3><span>$159</span>/night</h3>
                            <div className='galleryTextTwo' >
                                <h5>size: 30ft</h5>
                                <h5>Bed: Kings Bed</h5>
                                <h5>capacity: Maximum of 5 persons</h5>
                                <h5>services: WiFi, television, Bathroom,...</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: 'url("hotelroom2.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px', width: '350px', backgroundPosition: 'center', margin: '10px' }} >
                    <div className='galleryOverlayBox' >
                        <div className='galleryWholeText' >
                            <h2>Premium King Room</h2>
                            <h3><span>$159</span>/night</h3>
                            <div className='galleryTextTwo' >
                                <h5>size: 30ft</h5>
                                <h5>Bed: Kings Bed</h5>
                                <h5>capacity: Maximum of 5 persons</h5>
                                <h5>services: WiFi, television, Bathroom,...</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: 'url("hotelroom3.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px', width: '350px', backgroundPosition: 'center', margin: '10px' }} >
                    <div className='galleryOverlayBox' >
                        <div className='galleryWholeText' >
                            <h2>Deluxe Room</h2>
                            <h3><span>$159</span>/night</h3>
                            <div className='galleryTextTwo' >
                                <h5>size: 30ft</h5>
                                <h5>Bed: Kings Bed</h5>
                                <h5>capacity: Maximum of 5 persons</h5>
                                <h5>services: WiFi, television, Bathroom,...</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: 'url("hotelroom4.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px', width: '350px', backgroundPosition: 'center', margin: '10px' }} >
                    <div className='galleryOverlayBox' >
                        <div className='galleryWholeText'  >
                            <h2>Family Room</h2>
                            <h3><span>$159</span>/night</h3>
                            <div className='galleryTextTwo' >
                                <h5>size: 30ft</h5>
                                <h5>Bed: Kings Bed</h5>
                                <h5>capacity: Maximum of 5 persons</h5>
                                <h5>services: WiFi, television, Bathroom,...</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Gallery>

            <Testimonial  className={classes.slider} >
                <div style={{textAlign: 'center'}} >
                    <h2 style={{color: '#FF9233'}} >Testimonials</h2>
                    <AboutTitle style={{marginBottom: '30px', fontWeight: 'bold' }} >What Customers Say</AboutTitle>
                </div>
                <Slider className={classes.mainSlides} {...settings}>
                    <div>
                        <AboutParag style={{textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni repellat a vero facere impedit voluptates in delectus, corrupti maiores, architecto soluta ratione laudantium, numquam assumenda natus mollitia illum et?</AboutParag>
                        <AboutParag  style={{marginLeft: '400px', marginTop: '30px'}}>⭐⭐⭐⭐ - Kelly Owoju</AboutParag>
                        <Avatar style={{marginLeft: '470px', marginTop: '50px'}} variant='square' src='Trip-advisor.png' />
                    </div>
                    <div >
                        <AboutParag style={{textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni repellat a vero facere impedit voluptates in delectus, corrupti maiores, architecto soluta ratione laudantium, numquam assumenda natus mollitia illum et?</AboutParag>
                        <AboutParag style={{marginLeft: '400px', marginTop: '30px'}}>⭐⭐⭐⭐ - Kelly Owoju</AboutParag>
                        <Avatar style={{marginLeft: '470px', marginTop: '50px'}} variant='square' src='Trip-advisor.png' />
                    </div>
                    <div >
                        <AboutParag style={{textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni repellat a vero facere impedit voluptates in delectus, corrupti maiores, architecto soluta ratione laudantium, numquam assumenda natus mollitia illum et?</AboutParag>
                        <AboutParag style={{marginLeft: '400px', marginTop: '30px'}}>⭐⭐⭐⭐ - Kelly Owoju</AboutParag>
                        <Avatar style={{marginLeft: '470px', marginTop: '50px'}} variant='square' src='Trip-advisor.png' />
                    </div>
                </Slider >
            </Testimonial>

            <Footer style={{padding: '30px', transition: '.5s' }} >
                <div className={classes.innerFooter} >
                    <div style={{margin: '0px 20px 0px 0px'}}>
                        <h4 style={{fontFamily: 'Montserrat Alternates', fontWeight: 'bolder', color: '#FF9233' }} >TrexHotelDemo</h4>
                        <FooterText style={{width: '300px'}}>We inspire and reach millions of travelers
                        across 90 local websites</FooterText>
                        <FooterText style={{display: 'flex', alignItems: 'center'}} >
                            <FacebookIcon style={{margin: '0px 20px 0px 0px'}} />
                            <TwitterIcon style={{margin: '0px 20px'}} />
                            <TelegramIcon style={{margin: '0px 20px'}} />
                            <InstagramIcon style={{margin: '0px 20px'}} />
                        </FooterText>
                    </div>
                    <div style={{margin: '0px 30px'}}>
                        <h4 style={{color: '#FF9233' }} >Contact Us</h4>
                        <FooterText style={{width: '300px'}}>+234 9052926964<br/>kelliebrighty@gmail.com<br/>Mustard Seed,Moremi Estate, Ile-Ife,<br/>Osun State, Nigeria</FooterText>
                    </div>
                    <div style={{margin: '0px 30px'}}>
                        <h4 style={{color: '#FF9233', marginTop: '-20px' }} >New Latest</h4>
                        <FooterText style={{width: '300px'}}>Get latest updates and offers</FooterText>
                        <form action="">
                            <TextField variant='filled' label='Email' color='primary' />
                            <button style={{outline: 'none', border: 'none', height: '55px', width: '50px', backgroundColor: '#FF9233' }}><TelegramIcon/></button>
                        </form>
                    </div>
                    <div style={{margin: '0px 30px', cursor: 'pointer'}} onClick={changeTheme}>
                        {btn}
                    </div>
                </div>
            </Footer>
            <BelowFooter style={{display: 'flex', padding: '30px', alignItems: 'center', justifyContent: 'center', transition: '.5s'}} >
                    <div style={{display: 'flex'}} >
                        <FooterLink style={{margin: '0px 20px', fontSize: '18px', textDecoration: 'none', color: '#ccc'}} href="#">Contact</FooterLink>
                        <FooterLink style={{margin: '0px 20px', fontSize: '18px', textDecoration: 'none', color: '#ccc'}} href="#">Terms of Use</FooterLink>
                        <FooterLink style={{margin: '0px 20px', fontSize: '18px', textDecoration: 'none', color: '#ccc'}} href="#">Privacy</FooterLink>
                        <FooterLink style={{margin: '0px 20px', fontSize: '18px', textDecoration: 'none', color: '#ccc'}} href="#">Environmental Policy</FooterLink>
                    </div>
                    <div style={{marginTop: '15px', marginLeft: '50px'}} >
                        <FooterText>Copyright ©2021 All rights reserved | This template is made with love by Kellybright</FooterText>
                    </div>
                </BelowFooter>

            
                    
        </div>
    )
}

export default Home
