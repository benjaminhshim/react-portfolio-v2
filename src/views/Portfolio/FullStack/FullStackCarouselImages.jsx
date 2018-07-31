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


class FullStackCarouselImages extends React.Component {
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
      <div style={{borderRadius: "6px", marginTop: "25px"}}>
        <div style={{borderRadius: "6px"}}>
          <GridContainer>
            <GridItem>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                        src={require(`assets/img/${this.props.item1src}`)}
                        alt="First slide"
                        className="slick-image"
                    />
                    
                  </div>
                  <div
>
                    <img
                        src={require(`assets/img/${this.props.item2src}`)}
                        alt="Second slide"
                        className="slick-image"
                    />
                    
                  </div>
                  <div>
                    <img
                        src={require(`assets/img/${this.props.item3src}`)}
                        alt="Third slide"
                        className="slick-image"

                    />
                    
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>

        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(FullStackCarouselImages);
