import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Slide from "@material-ui/core/Slide";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import kindaNeatInfo from '../KindaNeat/kindaneat.json';
// import './CarouselFullStack.css';
import FullStackCarouselImages from './FullStackCarouselImages.jsx';


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

class FullStackGridItem extends Component {
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
    handleClickButton(state, selectedModal) {
        this.setState({
            [state]: true
        });
    }

    
    
  render() {
    const { classes } = this.props;
    
    return (
      <div>
          <div  className="fullstack-card-front">
            {/* <Paper> */}
                <div className="carousel-img" style={{borderRadius: "6px"}}>
                    <img             
                        style={{height: "200px", width: "100%", borderRadius: "6px"}}
                        src={require(`assets/img/${this.props.src}`)}
                    />
                    <div className="overlay" onClick={() => this.handleClickOpen("classicModal")}>
                        <h4 className="learn-more">Learn More</h4>
                    </div>
                </div>
            {/* </Paper> */}
        </div>


        <div>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        {/* <GridContainer>
                            <GridItem xs={12} sm={12} md={6} lg={8}> */}
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
                                    aria-describedby="classic-modal-slide-description" >

                                    <DialogContent>
                                        <div> 
                                            <FullStackCarouselImages
                                                    item1src={this.props.item1src}
                                                    item2src={this.props.item2src}
                                                    item3src={this.props.item3src} />
                                        </div>                                                 
                                    </DialogContent>
                                
                                    <DialogContent
                                        id="classic-modal-slide-description"
                                        className={classes.modalBody} >
                                        <div>
                                            <h3><strong>{this.props.title}</strong></h3>
                                            <h5>
                                                {this.props.info}
                                            </h5>
                                            <p style={{float: "right"}}>
                                                <a href={kindaNeatInfo[0].viewsite} target="_blank">
                                                    <Button color="info">View Site</Button>
                                                </a>
                                            </p>
                                            <p style={{float: "right"}}>
                                                <a href={kindaNeatInfo[0].listen} target="_blank">
                                                    <Button color="info">Listen</Button>
                                                </a>
                                            </p>
                                            <p style={{float: "right"}}>
                                                <a href={kindaNeatInfo[0].watch} target="_blank">
                                                    <Button color="info">Watch</Button>
                                                </a>
                                            </p>
                                            
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            {/* </GridItem>
                        </GridContainer> */}
                    </GridItem>
                </GridContainer>
            </div>
        </div>
      </div>
    )
  }
}

FullStackGridItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const learnMoreButtonStyle = {
    // border: '1px solid teal',
    border: '1px solid rgb(54,126,127)',
    padding: "10px 20px",
    textTransform: 'uppercase'
}


export default withStyles(styles)(FullStackGridItem);
