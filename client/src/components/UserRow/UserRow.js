import React from 'react';

const UserRow = (props) => {
    return (
        <div className="row user-row">
          <div className="col user-id">
          {props.userID}
          </div>
          <div className="col user-firstname">
          {props.firstName}
          </div>
          <div className="col user-lastname">
          {props.lastName}
          </div>
          <div className="col user-role">
          {props.role}
          </div>
          <div className="col user-operation">
            <a href="#"
            >
              <i class="fa fa-save"></i>
            </a>
            <a href="#"
            >
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
    );
}
export default UserRow;