import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";


class KindaNeatCarouselImages extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      // <div className={classes.section}>
      <div style={{marginTop: "35px"}}>
<div className={classes.container}>
          <GridContainer>
            <GridItem>
              <Card carousel>
                <div style={{boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}}>
                  <Carousel {...settings}>

                    <div style={{borderRadius: "6px", position: "relative"}}>
                      <iframe 
                        src="https://www.youtube.com/embed/e9aqYvzqrnI" 
                        frameborder="0" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen
                        style={{width: "100%", height: "600px"}}>
                      </iframe>
                    </div>
                    <div>
                      <iframe 
                        src="https://www.youtube.com/embed/kEqmguMjfd8" 
                        frameborder="0" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen
                        style={{width: "100%", height: "600px"}}>
                      </iframe>
                    </div>
                    <div>
                      <iframe 
                        src="https://www.youtube.com/embed/oh79L0MCpZY"
                        frameborder="0" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen
                        style={{width: "100%", height: "600px"}}>
                      </iframe>
                    </div>

                  </Carousel>
                </div>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(KindaNeatCarouselImages);
