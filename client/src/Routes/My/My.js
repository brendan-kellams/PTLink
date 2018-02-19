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
    classes         : []
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

          API.getMyClasses(response.data.id, (err, response) => {
            if (err) {
              console.log(err);
            }
            else {
              if (response.status === 200) {
                this.setState({
                  classes: response.data
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
              {this.state.classes.map(classroom => {
                return (
                  <ClassDiv
                  ClassTitle={`${classroom.Classroom.instructor.username}'s ${classroom.Classroom.subject} class`}
                  classSubject={classroom.Classroom.subject}
                  description={`period ${classroom.Classroom.period}`}
                  classInfo={classroom.Classroom}
                  history={this.props.history}
                />
                )
              })}  
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