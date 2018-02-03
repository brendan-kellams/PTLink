import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import BasicBtn from '../BasicBtn';


// for use with public pages ONLY
class Header extends Component {

  handleLogin(event) {
    event.preventDefault();
    // popup a modal
    console.log('popup a modal, do login');
  }

  handleLogout(event) {
    event.preventDefault();
    // call API to logout
    console.log('logging out');
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">PT-Link</Link>
        
          {
            (this.props.isUser >=0) ? 
            <BasicBtn 
              classes="btn-warning signinBtn" 
              handleClick={(event) => this.handleLogout(event)} 
              btnTxt="Logout"
            /> : 
            <BasicBtn 
              classes="btn-primary signinBtn" 
              handleClick={(event) => this.handleLogin(event)} 
              btnTxt="Login"
            />
          }
        
      </nav>
    );
  }
  
}

export default Header;