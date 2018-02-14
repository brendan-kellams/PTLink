var db = require('../models');

const ids = {};
var classrooms;

const createClasses = (cb) => {
  db.User.findAll({
    where: {
      isTeacher: true
    }
  })
  .then(function(teachers) {
    setTeacherIds(teachers, function(classrooms) {
      cb(classrooms);
    });
  });
}

const setTeacherIds = (teachers, cb) => {
  teachers.map(teacher => {
    let key = teacher.email.replace(/@yahoo.com/, '');
    ids[key] = teacher.id;
  });
  createClassrooms(function(classrooms) {
    cb(classrooms);
  });
}

const createClassrooms = (cb) => {
  cb(
    classrooms = [
      {
        subject: "English",
        period: 1,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.english
      },
      {
        subject: "English",
        period: 3,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.english
      },
      {
        subject: "English",
        period: 5,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.english
      },
      {
        subject: "English",
        period: 7,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.english
      },
      {
        subject: "Science",
        period: 2,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.science
      },
      {
        subject: "Science",
        period: 3,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.science
      },
      {
        subject: "Science",
        period: 6,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.science
      },
      {
        subject: "Science",
        period: 7,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.science
      },
      {
        subject: "History",
        period: 1,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.history
      },
      {
        subject: "History",
        period: 3,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.history
      },
      {
        subject: "History",
        period: 5,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.history
      },
      {
        subject: "History",
        period: 6,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.history
      },
      {
        subject: "Math",
        period: 1,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.math
      },
      {
        subject: "Math",
        period: 2,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.math
      },
      {
        subject: "Math",
        period: 4,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.math
      },
      {
        subject: "Math",
        period: 6,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.math
      },
      {
        subject: "Spanish",
        period: 2,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.spanish
      },
      {
        subject: "Spanish",
        period: 4,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.spanish
      },
      {
        subject: "Spanish",
        period: 5,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.spanish
      },
      {
        subject: "Spanish",
        period: 7,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.spanish
      },
      {
        subject: "Art",
        period: 1,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.art
      },
      {
        subject: "Art",
        period: 2,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.art
      },
      {
        subject: "Art",
        period: 3,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.art
      },
      {
        subject: "Art",
        period: 6,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.art
      },
      {
        subject: "music",
        period: 2,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.music
      },
      {
        subject: "music",
        period: 4,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.music
      },
      {
        subject: "music",
        period: 5,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.music
      },
      {
        subject: "music",
        period: 7,
        grade: "7",
        schoolyear: "2018",
        instructorId: ids.music
      }
    ]
  )
}

module.exports = {
  createClasses: createClasses
}