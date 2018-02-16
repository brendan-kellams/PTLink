import React, { Component } from 'react';

import { MyMainNav, MyMainContent, InviteUser, UsersList, ClassPanel} from '../../components';
import { Helper, API } from '../../Utils';


class ManageUsers extends Component {

  state = {
    navStateClass   : '',
    users           : [],
    classrooms      : []
  }

  componentDidMount() {
    // call API to get userID (or null)
    // if valid userID: call API to get a list of all user accessible by this teacher
    API.checkForUser((err, response) => {
      if (err) {
        console.log(err);
      }
      else {
        if (response.status === 200) {
          this.setState({
            userPresent: true,
            userId: response.data.id,
            username: response.data.username,
            isTeacher: response.data.isTeacher
          });
          if (isTeacher) {
            API.getInstructorClasses(this.state.userId, (err, response) => {
              if (err) {
                console.log(err);
              }
              else {
                if (response.status === 200) {
                  this.setState({
                    classrooms: response.data
                  });
                }
              }
            });
          }
        }
        else if (response.status === 204) {
          this.setState({
            userPresent: false
          });
        }
      }
    });
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

          {this.state.classrooms.map(classroom => {
            return <ClassPanel/>
          })}

        </MyMainContent>
      </div>
    )
  }
}

export default ManageUsers;