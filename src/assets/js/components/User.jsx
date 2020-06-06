import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../actions/userActions';
import Files from '../containers/Files';

@connect(store => ({
  user: store.user.user,
  files: store.user.files,
  loadingUser: store.user.loadingUser,
}))
export default class User extends Component {
  componentWillMount() {
    this.props.dispatch(getUser(this.props.match.params.userId));
  }

  render() {
    if (this.props.loadingUser || !this.props.user) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <p>{this.props.user.username} :-)</p>
        <Files showThankYou files={this.props.files} />
      </div>
    );
  }
}

User.defaultProps = {
  loadingUser: true,
  dispatch: undefined,
  user: undefined,
  match: {
    params: {
      userId: '',
    },
  },
};

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
  loadingUser: PropTypes.bool,
  dispatch: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string,
    }),
  }),
};
