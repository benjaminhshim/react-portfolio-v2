import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Slide from "@material-ui/core/Slide";

import FullStackGridItem from './FullStack/FullStackGridItem.jsx';
import MobileGridItem from './Mobile/MobileGridItem.jsx';
import FullStackModal from './FullStack/FullStackModal.jsx';
import fullstackData from './fullStackData.json';
import frontEndData from './frontEndData.json';
import mobileData from './Mobile/mobile.json';

// import './KindaNeat/KindaNeat.css';

import FrontEndImage from './FrontEnd/FrontEndImage';
import XXLImage from './FrontEnd/XXLImage';


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

class PortfolioGridList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
          }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root} style={{marginBottom: "20px"}}>

                <Grid container spacing={24}>
                    {fullstackData.map(i => (
                        <Grid item xs style={{margin: "20px 0px 0px 0px"}} className="grid-item-full-stack">

                            <FullStackModal 
                                className="fullstack-card-front"
                                src={i.src}
                                info={i.info}
                                href={i.href}
                                title={i.title}
                                item1src={i.item1src}
                                item2src={i.item2src}
                                item3src={i.item3src}/>
                        </Grid>
                    ))}

                </Grid>

                <Grid container spacing={24}>
                    {frontEndData.map(i => (
                        !i.item1src && !i.item2src && !i.item3src 
                        ?
                            <Grid item xs style={{margin: "10px 0px 0px 0px"}}>
                                <XXLImage 
                                    className="xxl-card-front"
                                    src={i.src}
                                    info={i.info}
                                    href={i.href}
                                    title={i.title}/>
                            </Grid>
                        :
                            <Grid item xs style={{margin: "10px 0px 0px 0px"}}>
                                <FrontEndImage 
                                    className="frontend-card-front"
                                    src={i.src}
                                    info={i.info}
                                    href={i.href}
                                    title={i.title}
                                    item1src={i.item1src}
                                    item2src={i.item2src}
                                    item3src={i.item3src}/>
                            </Grid>
                    ))}

                    {/* {mobileData.map(i => (
                        <Grid item xs style={{margin: "10px 0px 0px 0px"}}>
                            <MobileGridItem 
                                src={i.src}
                                info={i.info}
                                href={i.href}
                                title={i.title}
                                item1src={i.item1src}
                                item2src={i.item2src}
                                item3src={i.item3src}/>
                        </Grid>
                    ))} */}

                </Grid>

                {/* <Grid container spacing={24}>
                    {mobileData.map(i => (
                        <Grid item xs style={{margin: "10px 0px 0px 0px"}}>
                            <MobileGridItem 
                                src={i.src}
                                info={i.info}
                                href={i.href}
                                title={i.title}
                                item1src={i.item1src}
                                item2src={i.item2src}
                                item3src={i.item3src}/>
                        </Grid>
                    ))}
                </Grid> */}
            </div>
        );
    }
  
}

PortfolioGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const learnMoreButtonStyle = {
    border: '1px solid teal',
    padding: "10px 20px",
    textTransform: 'uppercase',
}

export default withStyles(styles)(PortfolioGridList);
