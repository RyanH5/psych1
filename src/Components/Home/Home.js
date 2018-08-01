import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../withAuthorization/withAuthorization';
import { db } from '../../firebase';

export class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;
    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    );
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <h2>Welcome{ !!users && <UserList users={users} /> }</h2>
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const authCondition = (authUser) => !!authUser;

// export default compose(
//   withAuthorization(authCondition),
//   connect(mapStateToProps, mapDispatchToProps)
// )(HomePage);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);