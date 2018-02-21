import React from 'react';

const MessageArea = (props) => {
    return (
      <div className="inbox-message-view">
        <h3>Message Area</h3>
        {
          typeof (props.viewMsg.id) !== 'undefined' ? 
          <div className="message-view">
            <div className="message-id">{props.viewMsg.id} </div>
            <div className="message-to-user">To: {props.viewMsg.toUser}</div>
            <div className="message-from-user">From: {props.viewMsg.fromUser}</div>
            <div className="message-title">{props.viewMsg.title}</div>
            <div className="message-body"><p>{props.viewMsg.msgBody}</p></div>
          </div> :
          <div>Click on a message to read</div>
        }
      </div>
    );
}
export default MessageArea;