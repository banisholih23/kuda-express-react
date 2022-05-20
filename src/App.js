import React, { Component } from 'react';
import './App.css';

import Home from './pages/home'
import Tracking from './pages/component/header/tracking'

import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tracking' element={<Tracking />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
