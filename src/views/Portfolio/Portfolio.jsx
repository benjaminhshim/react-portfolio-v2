import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Code from "@material-ui/icons/Code";
import StayCurrentPortant from "@material-ui/icons/StayCurrentPortrait";
import Developer_Mode from "@material-ui/icons/DeveloperMode";
// core components

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import CarouselFrontEnd from "./FrontEnd/CarouselFrontEnd.jsx";
import CarouselFullStack from "./FullStack/CarouselFullStack.jsx";
import CarouselMobile from "./Mobile/CarouselMobile.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// import './Portfolio.css';

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
 
            <div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Full-Stack",
                        tabIcon: Developer_Mode,
                        tabContent: (
                          <CarouselFullStack />
                        )
                      },
                      {
                        tabButton: "Front-End",
                        tabIcon: Code,
                        tabContent: (
                            <CarouselFrontEnd />
                        )
                      },
                      {
                        tabButton: "Mobile",
                        tabIcon: StayCurrentPortant
                        ,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                              <CarouselMobile />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>

    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
