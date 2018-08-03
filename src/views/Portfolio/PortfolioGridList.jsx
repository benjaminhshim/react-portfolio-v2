import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import fullstackData from './fullStackData.json';
import frontendData from './frontEndData.json';


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

function PortfolioGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{marginBottom: "20px"}}>
        <Grid container spacing={24}>

            {fullstackData.map(i => (
                <Grid item xs style={{margin: "20px 0px"}}>
                    <Paper>
                        <img             
                            style={{height: "200px", width: "100%", borderRadius: "3px"}}
                            src={require(`assets/img/${i.src}`)}
                        />
                    </Paper>
                </Grid>
            ))}

        </Grid>

        <Grid container spacing={24}>

            {frontendData.map(i => (
                <Grid item xs>
                    <Paper>
                        <img             
                            style={{height: "200px", width: "100%", borderRadius: "3px"}}
                            src={require(`assets/img/${i.src}`)}
                        />
                    </Paper>
                </Grid>
            ))}

                <Grid item xs>
                    <Paper>
                        <img             
                            style={{height: "200px", width: "33%", margin: "0 auto", display: "block", borderRadius: "3px"}}
                            src={require(`assets/img/astrolab.png`)}
                        />
                    </Paper>
                </Grid>

        </Grid>


        {/* <Grid item xs>
          <Paper>
            <img             
                style={{height: "200px", width: "100%", borderRadius: "3px"}}            
                src={require(`assets/img/scrapebeast.png`)}
            />

        
            </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}></Paper>
        </Grid> */}
    </div>
  );
}

PortfolioGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioGridList);
