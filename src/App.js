// IMPORT DEPENDENCIES
import React from "react";
import logo from "../src/img/logo.png";
import "./App.css";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";

// IMPORT COMPONENTS
import AccountMenu from "./components/AccountMenu";
import WelcomePage from "./components/Welcome";

// CONFIGURE AWS AMPLIFY
Amplify.configure(awsmobile);

// Define Drawer Width
const drawerWidth = 240;

class App extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className="root">
        <CssBaseline />
        <AppBar position="fixed" className="appbar">
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className="menuButton"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              optiPortal
            </Typography>
            <AccountMenu />
          </Toolbar>
        </AppBar>
        <Drawer className="drawer" anchor="left" open={open}>
          <div className="drawerHeader">
            <IconButton onClick={this.handleDrawerClose}>
              <Icon>close</Icon>
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem>Alumni Directory</ListItem>
            <ListItem>Mentor Directory</ListItem>
            <ListItem>Resource Directory</ListItem>
            <ListItem>Team Directory</ListItem>
          </List>
        </Drawer>
        <main className="content">
          <article className="content-container">
            <div className="drawerHeader">HEADER</div>
            <img src={logo} className="App-logo" alt="logo" />
            <WelcomePage />
          </article>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

// TODO: Remove the inline styles and preserve a HOC for Authentication
// export default withStyles(styles, { withTheme: true })(App);
export default withAuthenticator(App, true);
