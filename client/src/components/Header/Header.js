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
    let ourThis = this;
    API.checkForUser(function(err, response) {
      if (err) {
        console.log(err);
      }
      else {
        if (response.status === 200) {
          ourThis.setState({
            userPresent: true,
            username: response.data.username
          });
        }
        else if (response.status === 204) {
          ourThis.setState({
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
    let ourThis = this;
    let userData = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    };
    API.signInUser(userData, function(err, response) {
      if (err) {
        console.log(err);
      }
      else {
        if (response.status === 200) {
          ourThis.setState({
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
      <div>
        <LoginModal 
          show={this.state.showModal} 
          handleClose={this.handleClose}
        >
          <LoginForm
            handleLogin={this.handleLogin}
            handleChange={this.handleChange}
          />
        </LoginModal>
        <nav className="navbar navbar-light bg-light">
          <Link to="/" className="navbar-brand">PT-Link</Link>
            {(this.state.userPresent) ?
              <Button
                bsStyle="danger"
                onClick={this.handleLogout}
              >
                Log Out
              </Button>
              :
              <Button
                bsStyle="success"
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