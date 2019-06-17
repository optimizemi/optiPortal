// IMPORT DEPENDENCIES
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import PropTypes from "prop-types";
import WelcomePage from "./components/Welcome";
import MentorDirectory from "./components/MentorDirectory";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import NavMenu from "./NavMenu";
import Button from "@material-ui/core/Button";
import AccountMenu from "./components/AccountMenu";
import { BrowserRouter as Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

// CONFIGURE AWS AMPLIFY
Amplify.configure(awsmobile);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AppBar position="static">
            <Toolbar>
              <Typography className="App-title" variant="h4" color="inherit">
                optiPortal
              </Typography>
              <Link to="/mentors">
                <Button variant="outlined" noWrap>
                  Mentor Directory
                </Button>
              </Link>

              <AccountMenu />
            </Toolbar>
          </AppBar>
          <main className="content">
            <article className="content-container">
              <Route path="/" exact component={WelcomePage} />
              <Route path="/mentors/" component={MentorDirectory} />
            </article>
          </main>
        </Router>
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
export default withAuthenticator(App, false);
