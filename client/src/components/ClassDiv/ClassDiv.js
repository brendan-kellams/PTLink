import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
<<<<<<< HEAD
import { Glyphicon, Button } from 'react-bootstrap';
=======

import './ClassDiv.css';
>>>>>>> c7ba4c51deadd33bb3bae87ef56bb90e14843932

class ClassDiv extends Component {

  componentDidMount() {

  }

  handleEnterClass(e, classInfo) {
    console.log(e.target);
    console.log("Entering class:" + classInfo.id);
    this.props.history.push('/my/class', classInfo);
  }

  render() {
    return (
<<<<<<< HEAD
      <div className='row'>
        <div className='col-sm-6 col-md-4 col-lg-3'>
          <div className='thumbnail'>
            <div className='caption'>
              <h3>{this.props.ClassTitle}</h3>
              <p>{this.props.description}</p>
              <div>
                <span className='glyphicon glyphicon-book'></span>
              </div>
              <Button
                onClick={(e) => this.handleEnterClass(e, this.props.classInfo)}
                bsStyle="primary"
              >
                Enter Class
              </Button>
=======
        <div className='class-div col-sm-6 col-md-4 col-lg-3'>
            <div className='thumbnail'>
                    <div className='caption'>
                        <h3 className="class-title">{props.ClassTitle}</h3>
                        <p>{props.description}</p>
                        <p><a href={props.link} className='btn btn-primary' role='button'>Enter Class</a></p>
                    </div>
>>>>>>> c7ba4c51deadd33bb3bae87ef56bb90e14843932
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    )
  }
}

=======
    )
}
                    
>>>>>>> c7ba4c51deadd33bb3bae87ef56bb90e14843932
export default ClassDiv;