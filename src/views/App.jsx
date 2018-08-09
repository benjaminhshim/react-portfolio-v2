import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import AboutGrid from "./About/AboutGrid.jsx";
import PortfolioGrid from './Portfolio/PortfolioGrid.jsx';

import Contact from "./Contact/Contact.jsx";
import './App.css';

import scrollToComponent from 'react-scroll-to-component';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  
  scrollToHome = () => {
    scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1000})
  }

  scrollToAbout = () => {
    scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1000})
  }

  scrollToPortfolio = () => {
    scrollToComponent(this.Portfolio, { offset: 0, align: 'top', duration: 1000})
  }

  scrollToContact = () => {
    scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 1500})
  }
  
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div
        ref={(section) => { this.Home = section; }}
      >
        <Header
        
          brand="Benjamin Shim"
          scrollToHome={this.scrollToHome}
          rightLinks={
            <HeaderLinks 
            scrollToAbout={this.scrollToAbout}
            scrollToPortfolio={this.scrollToPortfolio}
            scrollToContact={this.scrollToContact}

          />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 275,
            color: "white"
          }}
          {...rest}

        />

        <Parallax 
        image={require("assets/img/home_sec.jpg")}
        id="content-parallax"
        >
          <div 
            className={classes.container} 
            id="main-header"
            >
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={`${classes.title} header-name`}>Benjamin Shim</h1>
                  <h3 className={`${classes.subtitle} header-subtitle`}>
                    Full-Stack Developer | Content Creator
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)} >

          {/* <Portfolio ref={(section) => { this.Portfolio = section; }}/> */}
          <PortfolioGrid ref={(section) => { this.Portfolio = section; }}/>

          {/* <About ref={(section) => { this.About = section; }} /> */}
          <AboutGrid ref={(section) => { this.About = section; }} />

          


          {/* <Contact ref={(section) => { this.Contact = section; }}/> */}

        </div>
        <Footer 
          scrollToHome={this.scrollToHome}
          scrollToAbout={this.scrollToAbout}
          scrollToPortfolio={this.scrollToPortfolio}
          scrollToContact={this.scrollToContact}
        />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
