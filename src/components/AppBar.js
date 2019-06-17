import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import NavMenu from "./NavMenu";
import Button from "@material-ui/core/Button";
import AccountMenu from "./AccountMenu";
import { BrowserRouter as Link } from "react-router-dom";

class PrimaryAppBar extends React.Component {
  render() {
    return (
      <div className="Appbar">
        <AppBar position="static">
          <Toolbar>
            <Typography className="App-title" variant="h4" color="inherit">
              optiPortal
            </Typography>
            <Button variant="outlined" noWrap>
              <Link to="/mentors">Mentor Directory</Link>
            </Button>

            <AccountMenu />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default PrimaryAppBar;
