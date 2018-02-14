var db = require('../models');

var participants = [];

const addParticipants = (cb) => {
  db.User.findAll({
    where: {
      isTeacher: false
    }
  })
  .then(function(parents) {
    db.Classroom.findAll({})
    .then(function(classrooms) {
      for (let i = 0; i < classrooms.length; i++) {
        for (let j = 0; j < parents.length; j++) {
          if(Math.floor(Math.random() * 4 + 1) === 2) {
            participants.push({
              userEmail: parents[j].email,
              ClassroomId: classrooms[i].id
            });
          }
        }
      }
      cb(participants);
    });
  })
}

module.exports = {
  addParticipants: addParticipants
}