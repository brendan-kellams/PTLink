import React from 'react';
import UserRow from '../UserRow';

const UsersList = (props) => {
  return (
    props.users.map((user, index) => {
      return (
        <UserRow
          key = {index}
          userID = {user.userID}
          userName = {user.userName}
          role = {user.role}
          handleDelete = {(event, userID) => props.doDelete(event, userID)}
        />
      );
    })
  )
}
export default UsersList;