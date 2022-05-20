import React, { Component } from 'react';
import './App.css';

import Home from './pages/home'
import Tracking from './pages/component/header/tracking'
import Crud from './pages/component/crud'
import Login from './pages/component/header/login'

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
            <Route path='/crud' element={<Crud />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
