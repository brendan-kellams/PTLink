import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MyMainNav, MyMainContent, InviteUser, UsersList, ClassPanel} from '../../components';
import { Button } from 'react-bootstrap';
import { Helper, API } from '../../Utils';


class ManageUsers extends Component {

  state = {
    navStateClass   : '',
    showingClass    : false,
    users           : [],
    participants    : [],
    classrooms      : [],
    successMsg      : 'hidden',
    errorMsg        : 'hidden',
    currentClassId  : -1,
    fetchedUsers    : false,
  }

  componentDidMount() {
    // call API to get userID (or null)
    // if valid userID: call API to get a list of all user accessible by this teacher
    API.checkForUser((err, response) => {
      if (err) {
        this.setState({
          userPresent: false,
        });
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
            API.getInstructorClasses(this.state.userId, (err, response) => {
              if (err) {
                console.log(err);
              }
              else {
                if (response.status === 200) {
                  this.setState({
                    classrooms: response.data,
                    fetchedUsers: true,
                  });
                }
              }
            });
        }
        else if (response.status === 204) {
          this.setState({
            userPresent: false
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

  handleDeleteUser(event, userID) {
    event.preventDefault();
    console.log('yooooo');
    // call API to delete User
    API.deleteUser(userID);
  }

  handleManageClass = (e, classroomId) => {
    e.preventDefault();
    this.setState({
      currentClassId: classroomId
    });
    this.getParticipants(classroomId);
    this.setState({
      showingClass: true
    })
  }
  
  getParticipants(classroomId) {
    API.getParticipants(classroomId, (err, response) => {
      if (err) console.log(err);
      else if (response.status === 200) {
        console.log(response.data);
        this.setState({
          participants: response.data
        })
      }
    });
  }

  handleBackClick = (e) => {
    e.preventDefault();
    this.setState({
      showingClass: false,
      currentClassId: -1
    })
  }

  handleInviteUser = (e, email) => {
    e.preventDefault();

    this.setState({
      successMsg  : 'hidden',
      errorMsg    : 'hidden'
    });

    if (Helper.validateEmail(email)) {
      // call API to send them an email
      let userInfo = {
        userEmail: email,
        classroomId: this.state.currentClassId
      }
      API.sendEmailInvite(userInfo, (err, response) => {
        // callback: after that, display success message
        if (err) console.log(err);
        else if (response.status === 200) {
          this.setState({successMsg: ''});
          this.getParticipants(this.state.currentClassId);
        }
      });
    }
    else {
      this.setState({errorMsg : ''})
    }

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
          title="manage users"
          contentClasses ='manage-users'>

          {this.state.showingClass ?

          <div>
            <Button
              bsStyle="primary"
              className="back-to-classrooms-btn"
              onClick={this.handleBackClick}
            >
              <i class="fa fa-angle-left"></i> Back to classroom list
            </Button>

            <InviteUser
              onSubmit={this.handleInviteUser}
              successMsg={this.state.successMsg}
              errorMsg={this.state.errorMsg}
            />

            <h3 className="sub-title">Users in Classroom</h3>
            <div className="users-in-classroom">
              {
                this.state.participants.length > 0 ?
                <div className="row label-row">
                  <div className="col-xs-2 user-id">User ID</div>
                  <div className="col-xs-8 user-email">Email Address</div>
                  <div className="col-xs-2 user-operation"></div>
                </div> :
                <p className="empty-classroom">This classroom is empty</p>
              }
              {
                this.state.participants.map(parent => {
                  return (
                    <div className="row user-row">
                      <div className="col-xs-2 user-id">{parent.id}</div>
                      <div className="col-xs-8 user-email">{parent.userEmail}</div>
                      <div className="col-xs-2 user-operation"><i class="delete-user fa fa-close"></i></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          :
          
          this.state.fetchedUsers && this.state.classrooms.length === 0 ?
          <div className="new-user new-teacher">
            <div className="clippy"></div>
            <p>Hi teacher, looks like you don't have access to any classes yet.</p>
            <p>You can add a class <Link to="/my/manage-classes">HERE</Link> and invite users to it from the this page.</p>
          </div> :
          
          this.state.classrooms.map(classroom => {
            return (
              <ClassPanel
                subject={classroom.subject}
                period={classroom.period}
                grade={classroom.grade}
                schoolyear={classroom.schoolyear}
                schoolName={classroom.schoolName}
                classroomId={classroom.id}
                handleClick={this.handleManageClass}
              />
            )
          })
        }

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

export default ManageUsers;