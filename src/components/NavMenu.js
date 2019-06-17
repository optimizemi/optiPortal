import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

/* This component displays a navigation menu where users can select a link to
 * view different parts of the portal.
 */

class AccountMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div className="nav-menu">
        <Button
          color="inherit"
          aria-owns={anchorEl ? "account-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="account-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/alumni">
            <MenuItem>Alumni Directory</MenuItem>
          </Link>
          <Link to="/mentors">
            <MenuItem>Mentor Directory</MenuItem>
          </Link>
          <Link to="/resources">
            <MenuItem>Resources</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default AccountMenu;
