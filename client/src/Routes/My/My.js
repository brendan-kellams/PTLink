import React, { Component } from 'react';

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
      this.state.userPresent ? 
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
                  description={`${classroom.Classroom.period} period`}
                  classInfo={classroom.Classroom}
                  history={this.props.history}
                />
                )
              })}  
            </div> 
        </MyMainContent>

      </div> :
      <div className="page-loading">
        <i className="fa fa-spinner fa-spin"></i>
      </div>
    )
  }
}

export default My;