import React, { Component } from 'react';

import { MyMainNav, MyMainContent, MessageRow, Inbox, Outbox} from '../../components';
import { Helper, API } from '../../Utils';


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
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a  className="nav-item nav-link active" 
                    id="nav-home-tab" data-toggle="tab" 
                    href="#nav-home" role="tab" aria-controls="nav-home" 
                    aria-selected="true">Inbox</a>
                <a  className="nav-item nav-link" 
                    id="nav-contact-tab" data-toggle="tab" 
                    href="#nav-contact" role="tab" 
                    aria-controls="nav-contact" aria-selected="false">Outbox</a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div  className="tab-pane fade show active" 
                    id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <Inbox />
              </div>
              <div  className="tab-pane fade" 
                    id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <Outbox />  
              </div>
            </div>
          </div>

        </MyMainContent>

      </div>
    )
  }
}

export default ManageMessages;