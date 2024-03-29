'use strict';

var React = require('react');
var Link = require("react-router").Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>This is not the page you are looking for.</p>
        <p><Link to="app">Back to base.</Link></p>
      </div>
    )
  }

});

module.exports = NotFoundPage;
