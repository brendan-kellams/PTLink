var express = require('express');
var router = express.Router();
var db = require('../models');
var { hashPassword, comparePassword } = require('../util/passwordHandler');
/** Signs a user up and stores a hashed password in the database */
router.post('/signup', function(req, res, next) {
  hashPassword(req.body.password, function(hashedPassword) {
    db.User.create({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
      isTeacher: req.body.isTeacher
    })
    .then(function(savedUser) {
      res.status(200).json(savedUser).end();
    })
    .catch(function(err) {
      if (err) {
        res.status(409).end();
        throw err;
      }
    });
  });
});
/** Signs a user in and starts a session. */
router.post('/signin', function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  db.User.findOne({
    where: {
      email: email
    }
  }).then(function(myUser) {
    if (typeof myUser === 'undefined' || myUser == null) {
      res.status(404).end();
    }
    else {
      comparePassword(password, myUser.password, function(success) {
        if (success) {
          req.session.user = myUser;
          res.status(200).json(req.session.user).end();
        }
        else {
          res.status(401).end();
        }
      });  
    }
  });
});
/** Signs a user out and ends the session. */
router.post('/signout', function(req, res, next) {
  req.session.destroy();
  res.status(200).end();
});
/** Checks if a user is signed in with the session. */
router.get('/userpresent', function(req, res, next) {
  if(!req.session.user) {
    return res.send(false).end();
  }
  else return res.send(true).end();
});

module.exports = router;