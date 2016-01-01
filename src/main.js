'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./Routes.jsx');

Router.run(routes, function(Handler){
  React.render(<Handler/>, document.getElementById('app'));
});
