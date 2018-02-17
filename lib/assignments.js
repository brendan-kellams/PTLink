var db = require('../models');

const assignments = [];

const createAssignments = function(cb) {
  db.Classroom.findAll()
  .then(function(classrooms) {
    let subjectAssignments;
    for (let i = 0; i < classrooms.length; i++) {
      switch (classrooms[i].dataValues.subject) {
        case 'Math':
          subjectAssignments = mathAssignments;
        break;
        case 'Science':
          subjectAssignments = scienceAssignments;
        break;
        default:
          subjectAssignments = [];
        break;
      }
      for (let j = 0; j < subjectAssignments.length; j++) {
        var currentAssignment = Object.assign({}, subjectAssignments[j]);
        currentAssignment.ClassroomId = classrooms[i].id;
        assignments.push(currentAssignment);
      }
    }
    cb(assignments);
  });
}

const mathAssignments = [
  {
    lessondate: '01/01/2018',
    link: 'https://www.google.com',
    topics: 'Complete the square',
    homework: 'The students are expected to proove the quadradic formula.',
    duedate: '01/02/2018'
  },
  {
    lessondate: '01/02/2018',
    link: 'https://www.google.com',
    topics: 'Square Root',
    homework: 'The students are expected to complete their square root worksheet.',
    duedate: '01/03/2018'
  },
  {
    lessondate: '01/03/2018',
    link: 'https://www.google.com',
    topics: 'Factoring',
    homework: 'The students are expected to finish factoring homework.',
    duedate: '01/04/2018'
  },
  {
    lessondate: '01/04/2018',
    link: 'https://www.google.com',
    topics: 'Infinate series sum',
    homework: 'The students are expected to master the Taylor series.',
    duedate: '01/05/2018'
  }
]

const scienceAssignments = [
  {
    lessondate: '01/01/2018',
    link: 'https://www.google.com',
    topics: 'Biology',
    homework: 'Map the human genome.',
    duedate: '01/02/2018'
  },
  {
    lessondate: '01/02/2018',
    link: 'https://www.google.com',
    topics: 'Physics',
    homework: 'Proove Newton\'s three laws',
    duedate: '01/03/2018'
  },
  {
    lessondate: '01/03/2018',
    link: 'https://www.google.com',
    topics: 'Astro-Physics',
    homework: 'Prove general relativity and special relativity.',
    duedate: '01/04/2018'
  },
  {
    lessondate: '01/04/2018',
    link: 'https://www.google.com',
    topics: 'Chemistry',
    homework: 'Find element 119',
    duedate: '01/05/2018'
  }
]

module.exports = {
  createAssignments: createAssignments
}