import React, { Component } from 'react';

import { MyMainNav, MyMainContent, InviteUser, UsersList} from '../../components';
import { Helper, API } from '../../Utils';


class ManageUsers extends Component {

  state = {
    navStateClass   : '',
    users           : [],
  }

  componentDidMount() {
    // call API to get userID (or null)
    // if valid userID: call API to get a list of all user accessible by this teacher
    API.getMyUsers((users) => {
      this.setState({
        users : users
      });
    })
  }

  handleNavToggle(isOpen) {
    if (isOpen) {
      this.setState({navStateClass : 'main-nav-opened'})  
    }
    else {
      this.setState({navStateClass : ''})  
    }
  }

  handleDeleteUser(event, userID) {
    event.preventDefault();
    console.log('yooooo');
    // call API to delete User
    API.deleteUser(userID);
  }

  render() {
    return (
      <div className={"container-fluid my " + this.state.navStateClass}>
        <MyMainNav 
          onToggle={(isOpen) => this.handleNavToggle(isOpen)}
        />
        <MyMainContent
          title="manage users"
          contentClasses ='manage-users'>
        
          <div className="user-container">
            <InviteUser />
            This is the manage user page, teacher access ONLY<br/>

            <UsersList
              users = {this.state.users}
              doDelete = {(event, userID) => this.handleDeleteUser(event, userID)}
            />
            <ul>
              <li>TODO: Invite User</li>
              <li>TODO: Display a list of Users from the current teacher's school</li>
              <li>TODO: add links to edit, delete, archieve Users</li>
            </ul>
          </div>

        </MyMainContent>
      </div>
    )
  }
}

export default ManageUsers;