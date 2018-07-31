/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {


  const { classes } = props;
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
      <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={props.scrollToAbout}
        >
          About
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={props.scrollToPortfolio}
        >
          Projects
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={props.scrollToContact}
        >
          Contact
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
