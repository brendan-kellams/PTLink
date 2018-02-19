import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './MyMainNav.css';

import { API } from '../../Utils';

// for use with public pages ONLY
class MyMainNav extends Component {

  state = {
    isTeacher : false,
    navState  : 0,
  }

  componentDidMount() {}

  handleLogout(event) {
    event.preventDefault();
    // call API to logout
    API.signOutUser(() => {
      this.props.history.push('/');  
    });
  }

  handleToggleNav(event) {
    // nav opened
    if (this.state.navState) {
      this.props.onToggle(false);
      this.setState({ navState : 0 });
    }
    else {
      this.props.onToggle(true);
      this.setState({ navState : 1 });
    }
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

        {
          this.state.isTeacher ?
          <ul className="navbar-primary-menu">
            <li>
              <Link className="public" to="/">
                <i className="fa fa-home"></i>
                <span className="nav-label">Home</span>
              </Link>
              <Link className="dash-board" to="/my">
                <i className="fa fa-clipboard"></i>
                <span className="nav-label">Dashboard</span>
              </Link>

              <Link className="user-manage" to="/my/manage-users">
                <i className="fa fa-users"></i>
                <span className="nav-label">Manage Users</span>
              </Link>

              <Link className="class-manage" to="/my/manage-classes">
                <i className="fa fa-briefcase"></i>
                <span className="nav-label">Manage Classes</span>
              </Link>

              <Link className="messages" to="/my/messages">
                <i className="fa fa-envelope"></i>
                <span className="nav-label">Messages</span>
              </Link>

              <a className="logout" href="#"
                 onClick={event => this.handleLogout(event)}>
                <i className="fa fa-sign-out"></i>
                <span className="nav-label">Logout</span>
              </a>
            </li>
          </ul> :
          <ul className="navbar-primary-menu">
            <li>
              <Link className="public" to="/">
                <i className="fa fa-home"></i>
                <span className="nav-label">Home</span>
              </Link>
              <Link className="dash-board" to="/my">
                <i className="fa fa-clipboard"></i>
                <span className="nav-label">Dashboard</span>
              </Link>

              <Link className="messages" to="/my/messages">
                <i className="fa fa-envelope"></i>
                <span className="nav-label">Messages</span>
              </Link>

              <a className="logout" href="#"
                 onClick={event => this.handleLogout(event)}>
                <i className="fa fa-sign-out"></i>
                <span className="nav-label">Logout</span>
              </a>
            </li>
          </ul>
        }
        
      </nav>
    );
  }

}

export default MyMainNav;