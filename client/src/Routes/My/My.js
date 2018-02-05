import React, { Component } from 'react';

import { MyMainNav } from '../../components';

class My extends Component {

  state = {
    
  }

  componentDidMount() {
    // call API to get userID (or null)
  }

  

  render() {
    return (
      <div className="container-fluid my">
        <MyMainNav />
      </div>
    )
  }
}

export default My;