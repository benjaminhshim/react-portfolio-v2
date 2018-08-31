import React, { Component } from 'react'
import './PortfolioItem.css';

import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "components/CustomButtons/Button.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";

import FullStackCarouselImages from '../FullStack/FullStackCarouselImages.jsx';
import '../FullStack/CarouselFullStack.css';

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

 class PortfolioItem extends Component {
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
      <div className="portfolio-item-div" style={{background: this.props.backgroundColor}}>
        <img 
            src={require(`assets/img/${this.props.src}`)} 
            style={{boxShadow: this.props.boxShadow}}
            />


        <div className="portfolio-item-description">
            <h2>{this.props.title}</h2>
            <h4>{this.props.details}</h4>
            <br />
            <p>{this.props.info}</p>
            <button 
                className="portfolio-item-button"
                style={{background: this.props.buttonBackground}}
                onClick={() => this.handleClickOpen("classicModal")}>Learn More</button>
        </div>


        <div className={classes.section}>
          <div className={classes.container}>
                    
                        
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={4}>
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
                      {this.props.item1src &&


                      <FullStackCarouselImages
                          item1src={this.props.item1src}
                          item2src={this.props.item2src}
                          item3src={this.props.item3src}
                          item4src={this.props.item4src}
                          item5src={this.props.item5src}
                          />
                      }
        
                    </div> 
                  </DialogContent>
                        
                        <DialogContent
                            id="classic-modal-slide-description"
                            className={classes.modalBody}
                        >
                            <div>
                                {/* <h3><strong>{this.props.title}</strong></h3>
                                <h5><em>Full Stack Application</em></h5>
                                <hr />
                                <h5>{this.props.info}</h5>
                                <h5><strong>Role:</strong> {this.props.role}</h5> */}
                                {/* <h5><strong>Front-End:</strong> {this.props.frontend}</h5>
                                <h5><strong>Back-End:</strong> {this.props.backend}</h5> */}

                                <p style={{float: "right"}}>
                                    <a href={this.props.href} target="_blank">
                                        <Button color="info">View Site</Button>
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
          
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(javascriptStyles)(PortfolioItem);
