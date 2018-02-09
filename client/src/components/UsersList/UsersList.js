import React from 'react';
import UserRow from '../UserRow';

const UsersList = (props) => {
  return (
    props.users.map((user, index) => {
      return (
        <UserRow
          userID = {user.userID}
          firstName = {user.firstName}
          lastName = {user.lastName}
          role = {user.role}
        />
      );
    })
  )
}
export default UsersList;