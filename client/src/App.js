import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Routes/Home';
import Signup from './Routes/Signup';
import My from './Routes/My';
import ManageUsers from './Routes/ManageUsers';
import ManageClasses from './Routes/ManageClasses';
import ManageMessages from './Routes/ManageMessages';
import Class from './Routes/Class';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route 
            exact 
            path="/" 
            component={Home}
          />
          <Route 
            exact 
            path="/signup" 
            component={Signup}
          />
          <Route 
            exact 
            path="/my" 
            component={My}
          />
          <Route 
            exact 
            path="/my/manage-users" 
            component={ManageUsers}
          />
          <Route 
            exact 
            path="/my/manage-classes" 
            component={ManageClasses}
          />
          <Route 
            exact 
            path="/my/messages" 
            component={ManageMessages}
          />
          <Route 
            exact 
            path="/my/class" 
            component={Class}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
