var express = require('express');
var router = express.Router();
var db = require('../models');
const Op = db.Sequelize.Op;

/* GET home page. */
router.get('/articles', function(req, res, next) {
  console.log("HERE");
  res.send("HAHA GOOD JOB!").status(200).end();
});

router.get('/classroom/:classId', function(req, res, next) {
  var responseObj = {};
  db.Classroom.findById(req.params.classId)
  .then(function(classroom) {
    classroom.getInstructor()
    .then(function(user) {
      responseObj.classroom = classroom;
      responseObj.instructor = user;
      res.send(responseObj).status(200).end()
    });
  })
  .catch(function(err) {
    if (err) {
      res.status(500).end();
      throw err;
    }
  });
});

router.post('/communication', function(req, res, next) {
  db.Communication.create({
    subject: req.body.subject,
    body: req.body.body,
    senderId: req.body.senderId
  })
  .then(function(newCommunication) {
    db.User.findAll({
      where: {
        [Op.or]: [
          {
            id: req.body.recipients
          },
          {
            id: req.body.senderId
          }
        ]
      }
    })
    .then(function(users) {
      newCommunication.addUsers(users, {through: {unread: true}});
      res.status(200).end();
    })
    .catch(function(err) {
      if (err) {
        res.status(500).end();
        throw err;
      }
    })
  })
});

router.post('/classroom', function(req, res, next) {
  // Create the classroom
  db.Classroom.create({
    subject: req.body.subject,
    period: req.body.period,
    grade: req.body.grade,
    schoolyear: req.body.schoolyear
  })
  .then(function(savedClassroom) {
    // Find user by id
    db.User.findById(req.body.teacherId)
    .then(function(user) {
      savedClassroom.addUser(user);
      savedClassroom.setInstructor(user);
      res.status(200).end();
    })
    .catch(function(err) {
      if (err) {
        res.status(500).end();
        throw err;
      }
    });
  })
  .catch(function(err) {
    if (err) {
      res.status(500).end();
      throw err;
    }
  });
});

router.post('/user', function(req, res, next) {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    isTeacher: req.body.isTeacher
  })
  .then(function(savedUser) {
    res.status(200).end();
  })
  .catch(function(err) {
    if (err) {
      res.status(500).end();
      throw err;
    }
  });
});

module.exports = router;
