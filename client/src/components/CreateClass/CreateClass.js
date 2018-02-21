import React, { Component } from 'react';

import { Helper, API } from '../../Utils';

import './CreateClass.css';

// for use with public pages ONLY
class CreateClass extends Component {
  state = {
    successMsg: 'hidden',
    errorMsg  : 'hidden',
    subject   : '',
    period    : '',
    school    : '',
    grade     : '',
    year      : '',
  };

  handleSubmit(event) {

    event.preventDefault();

    this.setState({
      successMsg  : 'hidden',
      errorMsg    : 'hidden'
    });

    if (!Helper.propIsEmpty(this.state.subject) &&
      !Helper.propIsEmpty(this.state.period) &&
      !Helper.propIsEmpty(this.state.school) &&
      !Helper.propIsEmpty(this.state.grade) &&
      !Helper.propIsEmpty(this.state.year)) {

      API.addClassroom({
        subject: this.state.subject,
        period: this.state.period,
        grade: this.state.grade,
        schoolyear: this.state.year,
        teacherId: this.props.teacherID
      }, (newClass) => {
        // reset form
        this.setState({
          subject   : '',
          period    : '',
          school    : '',
          grade     : '',
          year      : '',
        });
        
        // add new class to result
        this.props.handleAddClass(newClass.data);
      });
    }
    else {
      this.setState({
        errorMsg : ''
      });
    }
    
  }

  handleUserInput(event, fieldName) {
    event.preventDefault();

    const value = event.target.value;

    this.setState({[fieldName] : value});
  }
  
  render() {
    return (
      <div className="create-class-container">
        <h3 className="sub-title">Create Class</h3>
        <span className={this.state.successMsg + ' success-message'}>Your class is created</span>
        <span className={this.state.errorMsg + ' error error-message'}>Please enter all fields</span>
        <form 
          className="create-class-form"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <input 
            type="text" 
            value={this.state.subject} 
            onChange={(event) => this.handleUserInput(event, 'subject')}
            placeholder="Subject" />
          <input 
            type="text" 
            value={this.state.period} 
            onChange={(event) => this.handleUserInput(event, 'period')}
            placeholder="Period (number)" />
          <input 
            type="text" 
            value={this.state.school} 
            onChange={(event) => this.handleUserInput(event, 'school')}
            placeholder="School" />
          <input 
            type="text" 
            value={this.state.grade} 
            onChange={(event) => this.handleUserInput(event, 'grade')}
            placeholder="Grade" />
          <input 
            type="text" 
            value={this.state.year} 
            onChange={(event) => this.handleUserInput(event, 'year')}
            placeholder="Year" />
          <input 
            className="btn btn-primary create-class-btn"
            type="submit" 
            value="Create" 
          />
        </form>
      </div>
    );
  }
  
}

export default CreateClass;