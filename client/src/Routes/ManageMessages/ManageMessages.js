import React, { Component } from 'react';

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
        console.log(err);
      }
      else {
        if (response.status === 200) {
          this.setState({
            userPresent: true,
            username: response.data.username,
            userId: response.data.id
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
      <div className={"container-fluid my " + this.state.navStateClass}>
        <MyMainNav 
          onToggle={(isOpen) => this.handleNavToggle(isOpen)}
          history={this.props.history}
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

      </div>
    )
  }
}

export default ManageMessages;