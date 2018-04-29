import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Course from './Course';
import User from './User';
import Home from './Home';
import Signin from './Signin';
import SearchBar from '../components/SearchBar';

function signedIn() {
  return localStorage.getItem('currentUser') !== null;
}

const Main = () => (
  <main role="main" className="col-md-8 ml-sm-auto col-lg-8 pt-3 px-4 dz-clickable">
    <SearchBar />
    <Route exact path="/" component={Home} />
    <Route path="/courses/:courseNumber" component={Course} />
    <Route path="/users/:userId" component={User} />
    <Route
      exact
      path="/signin"
      render={props => (
        signedIn() ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        ) : (
          <Signin {...props} />
        )
      )}

    />
  </main>
);

Main.defaultProps = {
  location: {
    pathname: '',
  },
};

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default Main;
