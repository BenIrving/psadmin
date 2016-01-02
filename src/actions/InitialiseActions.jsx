'var script';

var Dispatcher = require('../dispatcher/AppDispatcher.jsx');
var ActionTypes = require('../constants/ActionTypes.jsx');
var AuthorApi = require('../api/AuthorApi.jsx');

var InitialiseActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALISE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};

module.exports = InitialiseActions;
