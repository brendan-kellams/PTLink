import React, { Component } from 'react';

import { MyMainNav, MyMainContent } from '../../components';

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

  renderMainContent() {
    if (this.state.mainContentPath == '') {
      return <div>This is Dashboard</div>;
    }
    else {
      return <div>This is the User "page"</div>;
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