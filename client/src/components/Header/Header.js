import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import {LoginModal, LoginForm} from '../../components';
import {Button} from 'react-bootstrap';

import { API } from '../../Utils';

// for use with public pages ONLY
class Header extends Component {

  state = {
    showModal: false,
    userPresent: false,
    username: ''
  }

  componentWillMount = () => {
    API.checkForUser((err, response) => {
      if (err) {
        console.log(err);
      }
      else {
        if (response.status === 200) {
          this.setState({
            userPresent: true,
            username: response.data.username,
            userId: response.data.id
          });
        }
        else if (response.status === 204) {
          this.setState({
            userPresent: false
          });
        }
      }
    });
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }

  handleLogin = event => {
    event.preventDefault();
    let userData = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    };
    API.signInUser(userData, (err, response) => {
      if (err) {
        console.log(err);
      }
      else {
        if (response.status === 200) {
          this.setState({
            showModal: false,
            userPresent: true,
            username: response.data.username
          });
        }
      }
    });
  }

  handleLogout = event => {
    event.preventDefault();
    let ourThis = this;
    API.signOutUser(function(err, response) {
      if (err) {
        console.log(err);
      }
      else {
        if (response.status === 200) {
          ourThis.setState({
            userPresent: false
          });
        }
      }
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
      <div className="header">
        <LoginModal 
          show={this.state.showModal} 
          handleClose={this.handleClose} >
          <LoginForm
            handleLogin={this.handleLogin}
            handleChange={this.handleChange}
          />
        </LoginModal>
        
        <div className="main-image">
          <h1 className="brand-font site-title">
            <img className="site-logo" src="/images/pt-link-152.png"/>
            <span className="title">PT-Link</span>
          </h1>
          <h3 className="brand-font site-title-2">Connecting teachers and parents</h3>
        </div>

        <nav className="navbar navbar-light bg-light navbar-fixed-top">
          {(this.state.userPresent) ?
            <Button
              className="logoutBtn"
              bsStyle="btn-outline-success"
              onClick={this.handleLogout}
            >
              Log Out
            </Button>
            :
            <Button
              className="loginBtn"
              bsStyle="btn-outline-success"
              onClick={this.handleShow}
            >
              Login
            </Button>
          }
        </nav>
      </div>
    );
  }
  
}

export default Header;