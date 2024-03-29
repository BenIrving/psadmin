'use strict';
var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if (!confirm('Are you sure you want to read a page that\'s this boring?')) {
        transition.abort();
      } else {
        callback();
      }
    },
    willTransitionFrom: function(transition, component) {
      if (!confirm('Are you sure you want to leave a page that\'s this exciting?')) {
        transition.abort();
      }
    }
  },
  render () {
    return(
      <div className="page-header">
        <h1>About</h1>
        <p>This application uses the following technologies:</p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    );
  }
})

module.exports = About;
