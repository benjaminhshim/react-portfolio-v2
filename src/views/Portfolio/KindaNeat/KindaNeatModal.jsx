import React from "react";
// react plugin for creating date-time-picker
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import KindaNeat from 'assets/img/kindaneat.jpg'
import kindaNeatInfo from './kindaneat.json';
import Button from "components/CustomButtons/Button.jsx";


// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";

import KindaNeatCarouselImages from './KindaNeatCarouselImages.jsx';
import './KindaNeat.css';
// import KindaNeatSocials from './KindaNeat.jsx';


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class KindaNeatModal extends React.Component {
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
            <div id="kinda-neat">
            
                <div className="kindaneat-img" style={{borderRadius: "10px"}}>
                    <img 
                        src={KindaNeat} 
                        
                    />             
                    <div className="overlay" onClick={() => this.handleClickOpen("classicModal")}>
                        <h4 className="learn-more" style={styles}>Learn More</h4>
                    </div>
                </div>

                <div className={classes.section}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
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
                                                    <KindaNeatCarouselImages />
                                                
                                            </DialogContent>
                                          
                                            <DialogContent
                                                id="classic-modal-slide-description"
                                                className={classes.modalBody}
                                            >
                                                <div>
                                                <h3><strong>{kindaNeatInfo[0].title}</strong></h3>
                                                    <hr />
                                                    <h5>{kindaNeatInfo[0].info}</h5>
                                                    <h5><strong>Role:</strong> {kindaNeatInfo[0].role}</h5>

                                                    
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
    borderRadius: "4px"
}



export default withStyles(javascriptStyles)(KindaNeatModal);