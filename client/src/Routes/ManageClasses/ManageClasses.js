import React, { Component } from 'react';

import { MyMainNav, MyMainContent, InviteUser, CreateClass } from '../../components';


class ManageClasses extends Component {

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
        />
        <MyMainContent
          title="manage classes"
          contentClasses ='manage-classes'>
        
          <div className="user-container">
            
            This is the manage class page, teacher access ONLY<br/>
            <CreateClass />
            <ul>
              <li>TODO: Add Class</li>
              <li>TODO: Display a list of Class from the current teacher you have control over</li>
              <li>TODO: add links to edit, delete, archieve (optional) classes</li>
            </ul>
          </div>

        </MyMainContent>
      </div>
    )
  }
}

export default ManageClasses;