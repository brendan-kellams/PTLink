import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import BasicBtn from '../BasicBtn';
import {LoginModal} from '../../components';
import {Button} from 'react-bootstrap';


// for use with public pages ONLY
class Header extends Component {

  state = {
    show: false
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

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
      <div>
        <LoginModal show={this.state.show} handleClose={this.handleClose}/>
        <nav className="navbar navbar-light bg-light">
          <Link to="/" className="navbar-brand">PT-Link</Link>
          
            {/* {
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
            } */}

            <Button
              bsStyle="success"
              onClick={this.handleShow}
              className="signinBtn"
            >
              Login
            </Button>
          
        </nav>
      </div>
    );
  }
  
}

export default Header;