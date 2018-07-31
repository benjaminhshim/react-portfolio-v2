import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";



import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class About extends React.Component {
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
            <h2 className="about-div">About</h2>
          </div>
          <div>
            <div className={classes.description}>
              <p>
              Benjamin Shim is a full-stack web developer based in Los Angeles, CA. He has spent the last seven years in music, entertainment &amp; digital media production working on music, TV, short films, radio, YouTube and podcasts before he decided to start a new chapter in his career as a developer.
              <br />
              <br />

              He is also a musician, content creator and digital media producer specializing in music and audio for short-form visual content.
              <br />
              <br />

              He spends his spare time producing content for his podcast and YouTube channel, Kinda Neat, which has amassed over 250,000 subscribers and 60 million views to-date. Subscribe here.
              <br />
              <br />
              </p>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(About);
