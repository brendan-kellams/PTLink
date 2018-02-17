import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import { Glyphicon, Button } from 'react-bootstrap';

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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ClassDiv;