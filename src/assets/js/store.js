import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import _ from 'lodash';
import thunk from 'redux-thunk';
import reducers from './reducers';

const auth = () => store => next => (action) => {
  // Get the state before and after the action was performed
  const previousToken = store.getState().auth.user;
  next(action);
  const nextToken = store.getState().auth.user;

  // Respond to changes
  if (nextToken !== previousToken) localStorage.setItem('currentUser', nextToken);
};

// Get initial state from localStorage
const token = localStorage.getItem('currentUser');
const initialState = token
  ? _.set({}, 'auth.user.currentUser', token)
  : {};

const middleware = applyMiddleware(thunk, createLogger(), auth());

export default createStore(reducers, initialState, middleware);
