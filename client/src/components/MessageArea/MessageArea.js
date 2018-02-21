import React from 'react';

const MessageArea = (props) => {
    return (
      <div className="inbox-message-view">
        <h3 className="sub-title">Message Area</h3>
        {
          typeof (props.viewMsg.id) !== 'undefined' ? 
          <div className="message-view">
            <div className="message-id">{props.viewMsg.id} </div>
            {
              props.viewMsg.toUser ?
              <div className="message-to-user">To: {props.viewMsg.toUser}</div> :
              ''  
            }
            {
              props.viewMsg.fromUser ?
              <div className="message-from-user">From: {props.viewMsg.fromUser}</div> :
              ''  
            }
            <hr/>
            <div className="message-title">{props.viewMsg.title}</div>
            <div className="message-body"><p>{props.viewMsg.msgBody}</p></div>
            <div className="envalope"><i className="fa fa-envelope"></i></div>
          </div> :
          <div>Click on a message to read</div>
        }
      </div>
    );
}
export default MessageArea;