import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import logo from "../img/logo.png";

class WelcomePage extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography paragraph>
          Welcome to the optiMize Community Portal. Here you can find
          information about the optiMize community including fellows, alumni,
          mentors, teams and staff. This portal is currently under active
          development. If you find any issues or would like request a feature,
          please use{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeR7sVb4WJbn0oBKzNUJPHeezFdSRkoudgiMsUqbrnl-zWhvQ/viewform?usp=sf_link">
            {" "}
            this form
          </a>
          .<br />
          <br />
          <b>Build Number: 3</b>
        </Typography>
      </div>
    );
  }
}

export default WelcomePage;
