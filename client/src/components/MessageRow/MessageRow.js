import React from 'react';

const MessageRow = (props) => {
    return (
        <div className="row message-row">
          <div className="col message-id">
          {props.messageID}
          </div>
          {
            props.isReceived ?  
            <div className="col message-title">
              <a href="#" onClick={(event) => props.viewMsg(event, {
                id : props.messageID,
                title : props.title,
                fromUserID : props.fromUserID,
                fromUser : props.fromUser,
                dateTime : props.msgDT,
                isRead : props.isRead,
                msgBody   : props.msgBody,
              })} >
              {props.title}
              </a>
            </div> : 
            <div className="col message-title">
              <a href="#" onClick={(event) => props.viewMsg(event, {
                id : props.messageID,
                title : props.title,
                toUserID : props.toUserID,
                toUser : props.toUser,
                dateTime : props.msgDT,
                msgBody   : props.msgBody,
              })} >
              {props.title}
              </a>
            </div>
          }
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