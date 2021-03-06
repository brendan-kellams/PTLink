import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {ClassDiv, Header, MyMainNav, MyMainContent, InviteUser } from '../../components';
import {API} from '../../Utils'
import './My.css';

class My extends Component {

  state = {
    navStateClass   : '',
    mainContentPath : '',
    contentClass    : 'dashboard',
    classes         : [],
    fetchedClasses  : false,
  }

  componentDidMount() {
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
            username: response.data.username,
            userId: response.data.id,
            isTeacher: response.data.isTeacher
          });

          if (response.data.isTeacher) {
            API.getInstructorClasses(response.data.id, (err, res) => {
              // console.log('return value from getInstructorClasses', res);
              if (err) {
                console.log(err);
              }
              else {
                this.setState({
                  classes : res.data,
                  fetchedClasses : true,
                });  
              }
            });
          }
          else {
            API.getMyClasses(response.data.id, (err, response) => {
              // console.log('return value from getMyClasses', response);
              if (err) {
                console.log(err);
              }
              else {
                if (response.status === 200) {
                  this.setState({
                    classes: response.data,
                    fetchedClasses : true,
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

  renderNewUser() {
    if (this.state.isTeacher) {
      return (
        <div className="new-user new-teacher">
          <div className="clippy"></div>
          <p>Hi teacher, welcome to PT-Link.</p>
          <p>It seems like you don't have access to any classes yet.</p>
          <p>You can add a class <Link to="/my/manage-classes">HERE</Link> and invite users to it from the manage-user page.</p>
        </div>
      );
    }
    else {
     return (
        <div className="new-user new-parent">
          <div className="clippy"></div>
          <p>Hi parent, welcome to PT-Link.</p>
          <p>It seems like you don't have access to any classes yet.</p>
          <p>You can send a message to a teachers <Link to="/my/messages">HERE</Link> to request access to their classes.</p>"
        </div>
      ); 
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
          contentClasses ='dashboard'
          title = "dashboard"
          >
            <div className="dashboard-container">
            {
              this.state.fetchedClasses && this.state.classes.length === 0 ?
              this.renderNewUser() :
              ''
            }
            {
              this.state.classes.map(classroom => {
                return (
                  this.state.isTeacher ?
                  <ClassDiv
                    ClassTitle={`${this.state.username}'s class`}
                    classSubject={classroom.subject}
                    description={`period ${classroom.period}`}
                    classInfo={classroom}
                    history={this.props.history}
                  /> :
                  <ClassDiv
                    ClassTitle={`${classroom.Classroom.instructor.username}'s ${classroom.Classroom.subject} class`}
                    classSubject={classroom.Classroom.subject}
                    description={`Period ${classroom.Classroom.period}`}
                    classInfo={classroom.Classroom}
                    history={this.props.history}
                  />
                )
              })
            }  
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

export default My;