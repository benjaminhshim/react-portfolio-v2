import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";
import KindaNeatSocials from './KindaNeat/KindaNeat.jsx';

import PortfolioItem from './PortfolioItem';

import KindaNeatModal from './KindaNeat/KindaNeatModal.jsx';
import './Portfolio.css';

import portfolioData from './portfolioData.json';


class PortfolioGrid extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
          <div id="nav-tabs">

            {portfolioData.map(i => (
              <PortfolioItem 
                src={i.src}
                info={i.info}
                href={i.href}
                github={i.github}
                title={i.title}
                details={i.details}
                role={i.role}
                float={i.float}
                backgroundColor={i.styles.background}
                boxShadow={i.styles.boxShadow}
                buttonBackground={i.styles.buttonBackground}
                item1src={i.item1src}
                item2src={i.item2src}
                item3src={i.item3src}
                item4src={i.item4src}
                item5src={i.item5src}
                carousel={i.carousel}
                />

            ))}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default withStyles(tabsStyle)(PortfolioGrid);
