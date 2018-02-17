import React from 'react';
import ClassRow from '../ClassRow';

const ClassesList = (props) => {
  return (
    props.classL.map((classObj, index) => {
      return (
        <ClassRow
          key = {index}
          classID = {classObj.id}
          name = {classObj.subject}
          period = {classObj.period}
          school = {classObj.schoolName}
          term = {classObj.grade}
          year = {classObj.schoolyear}
          handleDelete = {(event, classID) => props.doDelete(event, classID)}
          handleEdit = {(event, classID) => props.doEdit(event, classID)}
        />
      );
    })
  )
}
export default ClassesList;