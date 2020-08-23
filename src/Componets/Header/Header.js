import React from 'react';
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
      <NavLink to="/login">
      <Button variant="contained" color="secondary" className="header_loginButton">Login/Register</Button>
      </NavLink>
    </Toolbar>
  </AppBar> );
}
 
export default Header;