import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {

  console.log(props.user);
  if(!props.user.isLogged)
  console.log("i am not logged");
  else{
    console.log("i am logged");
  }



  return (
    <AppBar position="sticky" className="header_appBar">
      <Toolbar className="header_toolbar">
        <h1>
          <NavLink to="/" className="header_href">
            NY Times
          </NavLink>
        </h1>
        <NavLink to={!props.user.isLogged?"/login":"/logout"}>
          <Button
            variant="contained"
            color="secondary"
            className="header_loginButton"
          >
            {!props.user.isLogged?"Login/Register":"Sign out"}
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default connect((state) => ({
  user: state.loggins,
}))(Header);
