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

import Portfolio from './Portfolio.jsx';
import PortfolioGridList from './PortfolioGridList.jsx';

import KindaNeatModal from './KindaNeat/KindaNeatModal.jsx';
import './Portfolio.css';


class PortfolioGrid extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="nav-tabs">
            <h2 className="portfolio-header">Projects</h2>
            <div className="portfolio-grid">
              <GridContainer>
                <GridItem>
                  <CustomTabs   
                    headerColor="black"
                    tabs={[
                      {
                        tabName: "Web",
                        tabContent: (
                          // <Portfolio />
                          <PortfolioGridList />
                        )
                      },
                      {
                        tabName: "Kinda Neat",
                        tabContent: (
                          <div id="kinda-neat">
                            <KindaNeatModal />
                            <div id="kinda-neat-stats">
                              <h5>
                                  250,000 subscribers
                              </h5>
                              <h5>
                                  65,000,000 views
                              </h5>
                            </div>
                            <KindaNeatSocials />
                          </div>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(tabsStyle)(PortfolioGrid);
