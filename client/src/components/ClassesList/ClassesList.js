import React from 'react';
import ClassRow from '../ClassRow';

const ClassesList = (props) => {
  return (
    props.classL.map((classObj, index) => {
      return (
        <ClassRow
          key = {index}
          classID = {classObj.classID}
          name = {classObj.name}
          period = {classObj.period}
          school = {classObj.school}
          term = {classObj.term}
          year = {classObj.year}
          handleDelete = {(event, classID) => props.doDelete(event, classID)}
          handleEdit = {(event, classID) => props.doEdit(event, classID)}
        />
      );
    })
  )
}
export default ClassesList;