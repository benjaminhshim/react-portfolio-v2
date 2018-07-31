import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

import MobileImage from './MobileImage';
import astrolab from 'assets/img/astrolab.png';
import mobileProjects from './mobile.json';
 

class CarouselMobile extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
        <div className={classes.container}>
          <div style={
                {borderRadius: "6px",
                boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}}>    
            <Carousel {...settings}>

              {mobileProjects.map(i => (
                <MobileImage 
                  src={i.src}
                  info={i.info}
                  href={i.href}
                  title={i.title}/>
              ))}

            </Carousel>
          </div>
        </div>
    );
  }
}

export default withStyles(carouselStyle)(CarouselMobile);
