import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import "./Header.css";
import { NavLink } from 'react-router-dom';


const Header = () => {
    return ( <AppBar position="sticky" className="header_appBar">
    <Toolbar className="header_toolbar">
      <h1>
        <NavLink to="/" className="header_href">NY Times</NavLink>
      </h1>
      <Button variant="contained" color="secondary" href="/login">Login</Button>
    </Toolbar>
  </AppBar> );
}
 
export default Header;