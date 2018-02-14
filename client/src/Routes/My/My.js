import React, { Component } from 'react';

import {ClassDiv, Header, MyMainNav, MyMainContent, InviteUser } from '../../components';
import {API} from '../../Utils'
import './My.css';

class My extends Component {

  state = {
    navStateClass   : '',
    mainContentPath : '',
    contentClass    : 'dashboard',
  }

  componentDidMount() {
    let ourThis = this;
    API.checkForUser(function(err, response) {
      if (err) {
        console.log(err);
      }
      else {
        if (response.status === 200) {
          ourThis.setState({
            userPresent: true,
            username: response.data.username,
            userId: response.data.id
          });
        }
        else if (response.status === 204) {
          ourThis.setState({
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
      <div className={"container-fluid my " + this.state.navStateClass}>
        <Header />
        <MyMainNav 
          onToggle={(isOpen) => this.handleNavToggle(isOpen)}
        />
        <MyMainContent
          contentClasses ='dashboard'
          title = "dashboard"
          >
          <div className="dashboard-container">
            This is the Dashboard page, all user have access to this.<br/>
            <ul>
              <li>TODO: (optional) insights such as how many classes and users from classes</li>
              <li>TODO: notification?</li>
            </ul>
          </div>
          <ClassDiv
            ClassTitle="Mr.Johnson's Math class"
            description="Algebra I" />

        </MyMainContent>
      </div>
    )
  }
}

export default My;