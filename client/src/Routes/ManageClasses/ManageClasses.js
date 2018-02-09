import React, { Component } from 'react';

import { MyMainNav, MyMainContent, InviteUser, CreateClass, ClassesList } from '../../components';

import { Helper, API } from '../../Utils';

class ManageClasses extends Component {

  state = {
    navStateClass   : '',
    classes : [],
  }

  componentDidMount() {
    // call API to get userID (or null)
    API.getMyClasses((classes) => {
      this.setState({
        classes : classes
      });
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
  handleDeleteClass(event, classID) {
    event.preventDefault();
    console.log('deleting class', classID);
    // call API to delete User
    API.deleteClass(classID);
  }

  handleEditClass(event, classID) {
    event.preventDefault();
    console.log('editing class', classID);
    
    //API.editClass(classObj);
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
            
            <CreateClass />

            <hr />

            <h3>Your classes</h3>
            <ClassesList
              classL = {this.state.classes}
              doDelete = {(event, classID) => this.handleDeleteClass(event, classID)}
              doEdit = {(event, classID) => this.handleEditClass(event, classID)}
            />

            This is the manage class page, teacher access ONLY<br/>
            <ul>
              <li>TODO: add links to edit, archieve (optional) classes</li>
            </ul>
          </div>

        </MyMainContent>
      </div>
    )
  }
}

export default ManageClasses;