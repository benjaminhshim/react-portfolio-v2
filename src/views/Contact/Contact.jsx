import React from "react";
// react plugin that creates slider
import Nouislider from "react-nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import ContactSocials from './ContactSocials.jsx';
import Button from "components/CustomButtons/Button.jsx";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";

import EmailForm from './EmailForm.jsx';
import './Contact.css';
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2 id="contact-header">Contact</h2>
          </div>
          <div id="contact-div">
            <div className={classes.description}>
              <ContactSocials />

              {/* <p id="contact-email">benjaminhshim@gmail.com</p> */}
            </div>
            <EmailForm />

          </div>
        </div>

      </div>
    );
  }
}

export default withStyles(basicsStyle)(Contact);
