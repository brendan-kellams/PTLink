import React from 'react';

const UserRow = (props) => {
    return (
        <div className="row user-row">
          <div className="col user-id">
          {props.userID}
          </div>
          <div className="col user-email">
          {props.userEmail}
          </div>
          <div className="col user-username">
          {props.userName}
          </div>
          <div className="col user-role">
          {props.role}
          </div>
          <div className="col user-operation">
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