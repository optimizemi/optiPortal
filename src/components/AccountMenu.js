import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";
import { Auth } from "aws-amplify";

/* This component displays an account menu where users can select a link to
 * view their profile page or log out. It incorporates Auth functions from AWS
 * Amplify library.
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

  // Sign out function
  handleSignOut = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <Button
          aria-owns={anchorEl ? "account-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Icon>account_circle</Icon>
        </Button>
        <Menu
          id="account-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
          <MenuItem onClick={this.handleSignOut}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default AccountMenu;
