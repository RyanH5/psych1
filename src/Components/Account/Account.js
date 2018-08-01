import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../withAuthorization/withAuthorization';

const AccountPage = ({ authUser }) =>
  <div>
    <h1>Account: {authUser.email}</h1>
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);