import React from 'react';

const MessageRow = (props) => {
    return (
        <div className="row message-row">
          <div className="col message-id">
          {props.messageID}
          </div>
          <div className="col message-title">
          {props.title}
          </div>
          {
              props.isReceived ? 
              <div className="col message-from">
                {props.fromUser} - (User ID: {props.fromUserID})
              </div> :
              <div className="col message-from">
                {props.toUser} - (User ID: {props.toUserID})
              </div>
          }
          <div className="col message-is-read">
            {props.isRead}
          </div>
          <div className="col message-dt">
          {props.msgDT}
          </div>
          <div className="col message-operation">
            <a  href="#"
                onClick={(event) => props.handleDelete(event, props.messageID)}
            >
              <i className="fa fa-times"></i>
            </a>
          </div>
        </div>
    );
}
export default MessageRow;