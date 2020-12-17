import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './Menu';
import Timer from './Timer';


class Ui extends Component {
  render() {
    return (
      <Router>
          <div style={{ color: '#fff', textAlign: 'center' }}>
            <Navbar />
          </div>

          <Menu />
          <Route exact path="/timer" component={Timer} />
      </Router>
    );
  }
}

export default Ui;
