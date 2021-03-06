import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const browserHistory = require('react-router').browserHistory; 

import Routes from './routes';


const React = require('react');
const ReactDOM = require('react-dom');
const YearBook = require('./components/YearBook');
const PersonShow = require('./components/PersonShow');


const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Yearbook Component</h1>
        <YearBook />
        <h1>PersonShow Component (Hardcoded to Person 0)</h1>
        <PersonShow />
          <Router>
            // Each route is defined with Route
            <Route path="/" component={Home}/>
            <Route path="/Person" component={Person}/>
            <Route path="/Personshow" component={PersonShow}/>
            <Route path="/Yearbook" component={YearBook}/>
          </Router>
      </div>
    );
  }
});



ReactDOM.render(<App />, document.getElementById('container'));
