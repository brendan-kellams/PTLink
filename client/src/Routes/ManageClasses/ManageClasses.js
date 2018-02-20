import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MyMainNav, MyMainContent, InviteUser, CreateClass, ClassesList } from '../../components';

import { Helper, API } from '../../Utils';

class ManageClasses extends Component {

  state = {
    navStateClass   : '',
    classes : [],
    isTeacher: false,
  }

  componentDidMount() {

    API.checkForUser((err,response) => {
      if (err) {
        this.setState({
          userPresent: false,
        });
        console.log(err);
      }
      else {
        if (response.status === 200) {
          this.setState({
            userPresent :true,
            userId: response.data.id,
            username : response.data.username,
            isTeacher: response.data.isTeacher
          });

          // get classes
          if (response.data.isTeacher) {
            API.getInstructorClasses(response.data.id, (err, res) => {
              this.setState({
                classes : res.data
              });
            });
          }
          else {
            // call API to get userID (or null)
            API.getMyClasses(response.data.id, (err, res) => {
              this.setState({
                classes : res.data
              });
            });
          }
        }
        else if (response.status === 204) {
          this.setState({
            userPresent : false
          });
          this.props.history.push('/');
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
  handleDeleteClass(event, classID) {
    event.preventDefault();
    console.log('deleting class', classID);
    // call API to delete User
    API.deleteClass(classID);
  }

  handleEditClass(event, classID) {
    event.preventDefault();
    console.log('editing class', classID);
  }

  render() {
    return (
      this.state.userPresent === true ? 
      <div className={"container-fluid my " + this.state.navStateClass}>
        <MyMainNav 
          onToggle={(isOpen) => this.handleNavToggle(isOpen)}
          history={this.props.history} 
          isTeacher={this.state.isTeacher}
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
          </div>

        </MyMainContent>
      </div> :
      this.state.userPresent !== false ? 
      <div className="page-loading">
        <i className="fa fa-spinner fa-spin"></i>
      </div> :
      <div className="login-error">
        <div className="meh-face"><i className="fa fa-eye-slash"></i></div>
        <div><p className="error">Sorry, you are not authorized to view this content. Please login.</p></div>
        <div><Link to="/">HOME</Link></div>
      </div>
    )
  }
}

export default ManageClasses;