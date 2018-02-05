import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './MyMainNav.css';


// for use with public pages ONLY
class MyMainNav extends Component {

  state = {
    userID    : -1,
    userType  : '' 
  }

  componentDidMount() {
    // call API to get userID (or null)
    // make sure to get user Type

    // for now, assume userType 0 is teacher and userType 1 is parent
    this.setState({
      userID    : 1,
      userType  : 1,
      navState  : 0,
    });
  }

  handleLogout(event) {
    event.preventDefault();
    // call API to logout
    console.log('logging out');
  }

  handleToggleNav(event) {
    this.state.navState ? 
    this.setState({ navState : 0 }) : 
    this.setState({ navState : 1 })
  }

  getNavClass() {
    return this.state.navState ? 
           '' : 
           'collapsed ';
  }

  renderChevron() {
    return this.state.navState ? 
           <i className="fa fa-chevron-left"></i> :
           <i className="fa fa-chevron-right"></i>;
  }

  render() {
    return (
      <nav className={this.getNavClass() + "navbar-primary"}>
        <a href="#" 
           className="btn-expand-collapse"
           onClick={ event => this.handleToggleNav(event) }>
          { this.renderChevron() }
        </a>
        <ul className="navbar-primary-menu">
          <li>
            <a href="#">
              <i className="fa fa-clipboard"></i>
              <span className="nav-label">Dashboard</span>
            </a>
            <a href="#">
              <i className="fa fa-user"></i>
              <span className="nav-label">Profile</span>
            </a>
            <a href="#">
              <i className="fa fa-sign-out"></i>
              <span className="nav-label">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

}

export default MyMainNav;