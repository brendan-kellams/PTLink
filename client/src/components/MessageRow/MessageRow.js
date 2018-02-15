import React from 'react';

const MessageRow = (props) => {
    return (
        <div className="row message-row">
          <div className="col-md-1 message-id">
          {props.messageID}
          </div>
          {
            props.isReceived ?  
            <div className="col-md-3 message-title">
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
            <div className="col-md-3 message-title">
              <a href="#" onClick={(event) => props.viewMsg(event, {
                id : props.messageID,
                title : props.title,
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
              <div className="col-md-3 message-from">
                {props.fromUser}
              </div> :
              <div className="col-md-3 message-from">
                {props.toUser}
              </div>
          }
          <div className="col-md-2 message-is-read">
            {props.isRead}
          </div>
          <div className="col-md-2 message-dt">
          {props.msgDT}
          </div>
          <div className="col-md-1 message-operation">
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