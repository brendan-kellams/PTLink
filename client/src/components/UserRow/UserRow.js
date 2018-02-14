import React from 'react';

const UserRow = (props) => {
    return (
        <div className="row user-row">
          <div className="col-md-1 user-id">
          {props.userID}
          </div>
          <div className="col-md-3 user-email">
          {props.userEmail}
          </div>
          <div className="col-md-3 user-username">
          {props.userName}
          </div>
          <div className="col-md-3 user-role">
          {props.role}
          </div>
          <div className="col-md-2 user-operation">
            <a  href="#"
                onClick={(event) => props.handleDelete(event, props.userID)}
            >
              <i className="fa fa-times"></i>
            </a>
          </div>
        </div>
    );
}
export default UserRow;