import React, { Component } from 'react';

import { MyMainNav, MyMainContent, MessageRow, Inbox, Outbox} from '../../components';
import { Helper, API } from '../../Utils';
import { Tabs, Tab } from 'react-bootstrap';


class ManageMessages extends Component {

  state = {
    navStateClass   : '',
    received        : [],
    sent            : [],
    viewMsg         : {}
  }

  componentDidMount() {
    // get messages sent
    API.getMessagesSent((messages) => {
      this.setState({
        sent : messages
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