import React, { Component } from 'react';

import { MyMainNav, MyMainContent, InviteUser } from '../../components';


class ManageUsers extends Component {

  state = {
    navStateClass   : '',
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
          setMainContent={(path) => this.setMainContent(path)}
        />
        <MyMainContent
          title="manage users"
          contentClasses ='manage-users'>
        
          <div className="user-container">
            <InviteUser />
          </div>

        </MyMainContent>
      </div>
    )
  }
}

export default ManageUsers;