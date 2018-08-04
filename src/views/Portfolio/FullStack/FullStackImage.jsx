import React from "react";

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

import FullStackCarouselImages from './FullStackCarouselImages.jsx';
import './CarouselFullStack.css';


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class FullStackImage extends React.Component {
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
            <div className="carousel-container"style={{borderRadius: "6px",  marginBottom: "-3px"}}>
                <div className="carousel-img" style={{borderRadius: "6px"}}>
                    <img
                        src={require(`assets/img/${this.props.src}`)}
                        alt="first slide"
                        className="slick-image"
                        style={{borderRadius: "6px"}}
                        
                    />
                    <div className="overlay" onClick={() => this.handleClickOpen("classicModal")}>
                        <h4 className="learn-more" style={styles}>Learn More</h4>
                    </div>

                </div>

                {/* <div className={classes.section}> */}
                <div>
                    {/* <div className={classes.container}> */}
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
                                                    
                                                    <FullStackCarouselImages
                                                        item1src={this.props.item1src}
                                                        item2src={this.props.item2src}
                                                        item3src={this.props.item3src}

                                                        />
                                    
                                                </div> 
                                            </DialogContent>
                                          
                                            <DialogContent
                                                id="classic-modal-slide-description"
                                                className={classes.modalBody}
                                            >
                                                <div>
                                                    <h3><strong>{this.props.title}</strong></h3>
                                                    <hr />
                                                    <h5>
                                                        {this.props.info}
                                                    </h5>
                                                    <p style={{float: "right"}}>
                                                        <a href={this.props.href} target="_blank">
                                                            <Button color="info">View Site</Button>
                                                        </a>
                                                    </p>  
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

const styles = {
    border: '1px solid teal',
    padding: "15px 35px",
    textTransform: 'uppercase',
}


export default withStyles(javascriptStyles)(FullStackImage);