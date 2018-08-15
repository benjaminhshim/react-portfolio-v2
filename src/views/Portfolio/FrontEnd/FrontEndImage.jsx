import React from "react";
import Paper from '@material-ui/core/Paper';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "components/CustomButtons/Button.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";
import SlowShiverCarousel from "./SlowShiverCarousel";
import frontEndInfo from './frontEnd.json';

import './CarouselFrontEnd.css';


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class FrontEndImage extends React.Component {
    anchorElLeft = null;
    anchorElTop = null;
    anchorElBottom = null;
    anchorElRight = null;
    constructor(props) {
      super(props);
      this.state = {
        classicModal: false,
        openLeft: false,
        openTop: false,
        openBottom: false,
        openRight: false
      };
    }
    handleClickOpen(modal) {
      var x = [];
      x[modal] = true;
      this.setState(x);
    }
    handleClose(modal) {
      var x = [];
      x[modal] = false;
      this.setState(x);
    }
    handleClosePopover(state) {
      this.setState({
        [state]: false
      });
    }
    handleClickButton(state) {
      this.setState({
        [state]: true
      });
    }
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className="frontend-card-front">
                {/* <Paper> */}
                    <div className="carousel-img" style={{borderRadius: "6px"}}>
                        <img
                            src={require(`assets/img/${this.props.src}`)}
                            alt="first slide"
                            className="slick-image"
                            style={{borderRadius: "6px"}}

                        />
                        <div className="overlay" onClick={() => this.handleClickOpen("classicModal")}
    >
                            <h4 className="learn-more">Learn More</h4>
                        </div>

                    </div>
                {/* </Paper> */}
                </div>

                <div>
                    <div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6} lg={8}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6} lg={8}>
                                        <Dialog
                                            classes={{
                                            root: classes.center,
                                            paper: classes.modal
                                            }}
                                            open={this.state.classicModal}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={() => this.handleClose("classicModal")}
                                            aria-labelledby="classic-modal-slide-title"
                                            aria-describedby="classic-modal-slide-description"
                                        >

                                            <DialogContent>
                                                <div>
                                                    <SlowShiverCarousel 
                                                        item1src={this.props.item1src}
                                                        item2src={this.props.item2src}
                                                        item3src={this.props.item3src}
                                                        item4src={this.props.item4src}
                                                        item5src={this.props.item5src}/>

                                                </div>
                                            </DialogContent>
                                          
                                            <DialogContent
                                                id="classic-modal-slide-description"
                                                className={classes.modalBody}
                                            >
                                                <div>
                                                    <h3><strong>{this.props.title}</strong></h3>
                                                    <hr />
                                                    <h5>{this.props.info}</h5>
                                                    <h5><strong>Role:</strong> {this.props.role}</h5>
                                                    <p style={{float: "right"}}>
                                                        <a 
                                                            href={this.props.href} 
                                                            target="_blank"
                                                            style={{color: "teal", fontWeight: '900'}}>
                                                            <Button color="info">
                                                            View Site
                                                            </Button>
                                                        </a>
                                                    </p>

                                                    {this.props.github !== null &&
                                                        <p style={{float: "right"}}>
                                                            <a href={this.props.github} target="_blank">
                                                                <Button color="info">View Repo</Button>
                                                            </a>
                                                        </p> 
                                                    }
                                                    
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        )
    }

}


export default withStyles(javascriptStyles)(FrontEndImage);