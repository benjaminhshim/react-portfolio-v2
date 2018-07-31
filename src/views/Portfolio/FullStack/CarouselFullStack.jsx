import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

import FullStackImage from './FullStackImage';

import fullStackProjects from './fullstack.json';

class CarouselFullStack extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      // <div className={classes.section}>
        <div className={classes.container}>
    
        <GridContainer>
          <GridItem >
            <div style={
              {borderRadius: "6px",
              boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}
            }>
                <Carousel {...settings}>
                  
                  {fullStackProjects.map(i => (
                    <FullStackImage 
                      src={i.src}
                      info={i.info}
                      href={i.href}
                      title={i.title}
                      item1src={i.item1src}
                      item2src={i.item2src}
                      item3src={i.item3src}
                      />
                  ))}
   
                </Carousel>
                </div>
            </GridItem>
          </GridContainer>
        </div>
    );
  }
}




export default withStyles(carouselStyle)(CarouselFullStack);
