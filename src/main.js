'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./Routes.jsx');
var InitialiseActions = require('./actions/InitialiseActions.jsx');

InitialiseActions.initApp();

Router.run(routes, function(Handler){
  React.render(<Handler/>, document.getElementById('app'));
});
