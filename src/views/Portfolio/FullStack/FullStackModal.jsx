import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "components/CustomButtons/Button.jsx";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";

import FullStackCarouselImages from './FullStackCarouselImages.jsx';
import './CarouselFullStack.css';


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class FullStackModal extends React.Component {
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
                      
                </div>
            </div>
        )
    }

}



export default withStyles(javascriptStyles)(FullStackModal);