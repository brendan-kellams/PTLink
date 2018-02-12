import React from 'react';

const ClassRow = (props) => {
    return (
        <div className="row class-row">
          <div className="col class-id">
          {props.classID}
          </div>
          <div className="col class-period">
          {props.name}
          </div>
          <div className="col class-period">
          {props.period}
          </div>
          <div className="col class-school">
          {props.school}
          </div>
          <div className="col class-term">
          {props.term}
          </div>
          <div className="col class-year">
          {props.year}
          </div>
          <div className="col class-operation">
            <a  href="#"
                onClick={(event) => props.handleDelete(event, props.classID)}
            >
              <i className="fa fa-edit"></i>
            </a>

            <a  href="#"
                onClick={(event) => props.handleEdit(event, props.classID)}
            >
              <i className="fa fa-times"></i>
            </a>
          </div>
        </div>
    );
}
export default ClassRow;