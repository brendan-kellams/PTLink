import React from 'react';

const MessageRow = (props) => {
    return (
        <div className="row message-row">
          <div className="message-id">
          {props.messageID}
          </div>
          {
            props.isReceived ? 
            <div className="col-xs-1 inbox"><i class="fa fa-arrow-circle-right"></i></div> :
            <div className="col-xs-1 outbox"><i class="fa fa-arrow-circle-left"></i></div>
          }
          {
            props.isReceived ?  
            <div className="col-sm-4 message-title">
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
            <div className="col-sm-4 message-title">
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
              <div className="col-sm-4 message-from">
                {props.fromUser}
              </div> :
              <div className="col-sm-4 message-to">
                {props.toUser}
              </div>
          }
          <div className="col-sm-3 message-dt">
          {props.msgDT}
          </div>
          {/*
            <div className="col-md-1 message-operation">
            <a  href="#"
                onClick={(event) => props.handleDelete(event, props.messageID)}
            >
              <i className="fa fa-times"></i>
            </a>
          </div>
          */}
          
        </div>
    );
}
export default MessageRow;