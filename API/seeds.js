var express = require('express');
var router = express.Router();
var db = require('../models');

var { hashPassword } = require('../util/passwordHandler');

var {
  classrooms, 
  users, 
  participants, 
  assignments,
  messages
} = require('../lib');

router.post('/create-seed-data', function(req, res, next) {
  // Create the users
  hashPassword(users[0].password, function(hashedPassword) {
    for (let i = 0; i < users.length; i++) {
      users[i].password = hashedPassword;
    }
    db.User.bulkCreate(users)
      .then(function(results) {
        // Create the classrooms
        classrooms.createClasses(function(classrooms) {
          db.Classroom.bulkCreate(classrooms)
          .then(function(classrooms) {
            // Add participants to classrooms
            participants.addParticipants(function(participants) {
              db.Participant.bulkCreate(participants)
              .then(function(participants){
                // Add Asignments to classrooms
                assignments.createAssignments(function(assignments) {
                  db.Assignment.bulkCreate(assignments)
                  .then(function(assignments){
                    messages.createMessages(function() {
                      res.status(200).end();
                    });
                  })
                  .catch(function(err) {
                    if (err) {
                      console.log(err);
                      res.status(500).end();
                    }
                  });
                })
              })
              .catch(function(err) {
                if (err) {
                  console.log(err);
                  res.status(500).end();
                }
              });
            })
          })
        .catch(function(err) {
          if (err) {
            console.log(err);
            res.status(500).end();
          }
        });
      })
    })
    .catch(function(err) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
    });
  });
});

module.exports = router;