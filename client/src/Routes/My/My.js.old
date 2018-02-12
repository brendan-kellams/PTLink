import React, { Component } from 'react';

import { MyMainNav, MyMainContent, InviteUser } from '../../components';

import './My.css';

class My extends Component {

  state = {
    navStateClass   : '',
    mainContentPath : '',
    contentClass    : 'dashboard',
  }

  componentDidMount() {
    // call API to get userID (or null)
  }

  handleNavToggle(isOpen) {
    if (isOpen) {
      this.setState({navStateClass : 'main-nav-opened'})  
    }
    else {
      this.setState({navStateClass : ''})  
    }
  }

  // mainContentPath: determine what the app would render for the main content
  // contentClass: class for the main-content div
  setMainContent(path) {
    if (path == '') {
      this.setState({mainContentPath : ''})
      this.setState({contentClass : 'dashboard'});  
    }
    else {
      this.setState({mainContentPath : 'manage-user'})
      this.setState({contentClass : 'manage-user'});
    }
  }

  // main render function for all the pages once a user login
  renderMainContent() {
    if (this.state.mainContentPath == '') {
      return <div>This is Dashboard</div>;
    }
    else {
      return (
        <div class="user-container">
          <InviteUser />
        </div>
      );
    }
  }

  render() {
    return (
      <div className={"container-fluid my " + this.state.navStateClass}>
        <MyMainNav 
          onToggle={(isOpen) => this.handleNavToggle(isOpen)}
          setMainContent={(path) => this.setMainContent(path)}
        />
        <MyMainContent
          contentClasses = {this.state.contentClass}
          mainContent = {() => this.renderMainContent()} 
        />
      </div>
    )
  }
}

export default My;