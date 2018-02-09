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

  render() {
    return (
      <div className={"container-fluid my " + this.state.navStateClass}>
        <MyMainNav 
          onToggle={(isOpen) => this.handleNavToggle(isOpen)}
        />
        <MyMainContent
          contentClasses ='dashboard'
          title = "dashboard"
          >
          <div className="dashboard-container">
            This is the Dashboard page, all user have access to this.<br/>
            <ul>
              <li>TODO: (optional) insights such as how many classes and users from school</li>
              <li>TODO: notification?</li>
            </ul>
          </div>

        </MyMainContent>
      </div>
    )
  }
}

export default My;