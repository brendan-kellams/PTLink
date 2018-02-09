import React, { Component } from 'react';

import { Helper, API } from '../../Utils';


// for use with public pages ONLY
class CreateClass extends Component {
  state = {
    successMsg: 'hidden',
    errorMsg  : 'hidden',
    name      : '',
    period    : '',
    school    : '',
    term      : '',
    year      : '',
  };

  handleSubmit(event) {

    event.preventDefault();

    this.setState({
      successMsg  : 'hidden',
      errorMsg    : 'hidden'
    });

    if (!Helper.propIsEmpty(this.state.name) &&
      !Helper.propIsEmpty(this.state.period) &&
      !Helper.propIsEmpty(this.state.school) &&
      !Helper.propIsEmpty(this.state.term) &&
      !Helper.propIsEmpty(this.state.year)) {
      console.log('all good you shit');

      this.setState({
        successMsg : ''
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
        <h3>Create Class</h3>
        <span className={this.state.successMsg + ' success-message'}>Your class is created</span>
        <span className={this.state.errorMsg + ' error error-message'}>Please enter all fields</span>
        <form 
          className="create-class-form"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <input 
            type="text" 
            value={this.state.email} 
            onChange={(event) => this.handleUserInput(event, 'name')}
            placeholder="Email" />
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
            value={this.state.term} 
            onChange={(event) => this.handleUserInput(event, 'term')}
            placeholder="Term" />
          <input 
            type="text" 
            value={this.state.year} 
            onChange={(event) => this.handleUserInput(event, 'year')}
            placeholder="Year" />
          <input 
            type="submit" 
            value="Create" 
          />
        </form>
      </div>
    );
  }
  
}

export default CreateClass;