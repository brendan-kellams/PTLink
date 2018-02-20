import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MyMainNav, MyMainContent, MessageRow, Inbox, Outbox} from '../../components';
import { Helper, API } from '../../Utils';
import { Tabs, Tab } from 'react-bootstrap';

import './ManageMessages.css';

class ManageMessages extends Component {

  state = {
    navStateClass   : '',
    received        : [],
    sent            : [],
    viewMsg         : {}
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

  handleDeleteMessage(event, msgID) {
    event.preventDefault();
    console.log('deleting message', msgID);;
    // call API to delete User
    API.deleteMsg(msgID);
  }

  handleViewMessage (event, msgObj) {
    event.preventDefault();
    this.setState({
      viewMsg : msgObj
    });
    API.setMessageRead(msgObj.id);
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
          title="messages"
          contentClasses ='manage-messages'>
        
          <div className="messages-container">
            <nav>
              <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Inbox">
                  <Inbox/>
                </Tab>
                <Tab eventKey={2} title="Outbox">
                  <Outbox/>
                </Tab>
              </Tabs>
            </nav>
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

export default ManageMessages;