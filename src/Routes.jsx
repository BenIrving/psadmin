'use strict';

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/App.jsx')}>
    <DefaultRoute handler={require('./components/HomePage.jsx')} />
    <Route name="authors" handler={require('./components/authors/AuthorPage.jsx')} />
    <Route name="addAuthor" path="author" handler={require('./components/authors/ManageAuthorPage.jsx')} />
    <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/ManageAuthorPage.jsx')} />
    <Route name="about" handler={require('./components/about/AboutPage.jsx')} />
    <NotFoundRoute handler={require('./components/NotFoundPage.jsx')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="authore" to="authors" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
