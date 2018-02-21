import axios from "axios";

export default {

  signUpUser: function(user, callback) {
    axios.post('/user/signup', user)
    .then(function(response) {
      if (typeof callback === 'function') {
        callback(null, response.status);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err, err.response.status);
      }
    });
  },
  signInUser: function(user, callback) {
    axios.post('/user/signin', user)
    .then(function(response) {
      if (typeof callback === 'function') {
        callback(null, response);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err, err.response.status);
      }
    });
  },
  getUserByEmail: function(email, callback) {
    axios.get('/api/getuserinfo/' + email)
    .then(function(response) {
      if (typeof callback === 'function') {
        callback(response);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err);
      }
    });
  },
  signOutUser: function(callback) {
    axios.post('/user/signout')
    .then(function(response) {
      if (typeof callback === 'function') {
        callback(null, response);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err, err.response.status);
      }
    });
  },
  checkForUser: function(callback) {
    axios.get('/user/userpresent')
    .then(function(response) {
      if (typeof callback === 'function') {
        callback(null, response);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err, err.response.status);
      }
    });
  },
  addAssignment: function(data, callback) {
    axios.post('/api/addassignment', data)
    .then(function(response) {
      if (typeof callback === 'function') {
        callback(null, response);
      }      
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err, err.response.status);
      }
    }); 
  },
  getAssignments: function(classroomId, callback) {
    axios.get('/api/assignmentsbyclass/' + classroomId)
    .then(function(response) {
      if (typeof callback === 'function') {
        callback(null, response);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err, err.response.status);
      }
    }); 
  },
  sendEmailInvite: function(email, callback) {
    console.log('sending email....');
    if (typeof callback === 'function') {
      callback();
    }
  },
  getInstructorClasses: function(id, callback) {
    axios.get('/api/instructorclasses/'+id)
    .then(function(classrooms) {
      if (typeof callback === 'function') {
        callback(null, classrooms);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err, err.response.status);
      }
    });
  },
  getMyClasses: function(id, callback) {
    console.log('calling API to classes I have access to', id);

    axios.get('/api/classroombyuser/'+id)
    .then(function(response) {
      console.log(response);
      if (typeof callback === 'function') {
        callback(null, response);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err, err.response.status);
      }
    });
  },
  setMessageRead: function(msgID, callback) {
    console.log('calling API to mark a message as READ');
    if (typeof callback === 'function') {
      callback();
    }
  },
  getMessagesReceived: function(userId, callback) {
    axios.get('/api/inbox/' + userId)
    .then(function(response) {
      if (typeof callback === 'function') {
        callback(null, response);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err, err.response.status);
      }
    });
  },
  getMessagesSent: function(userId, callback) {
    axios.get('/api/outbox/' + userId)
    .then(function(response) {
      if (typeof callback === 'function') {
        callback(null, response);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err, err.response.status);
      }
    });
  },
  getMyUsers: function(callback) {
    console.log('calling API to get users I have access to');

    const yourUsers = [
      {
        userID    : 0,
        userEmail : 'trump@realdonalidtrump.com',
        userName  : 'dTrump',
        role      : false,
      },
      {
        userID    : 1,
        userEmail : 'therock@rock.com',
        userName  : 'dJohnson',
        role      : false,
      },
      {
        userID    : 2,
        userEmail : 'greg@ucsd.edu',
        userName  : 'gLee',
        role      : true,
      }
    ];

    if (typeof callback === 'function') {
      callback(yourUsers);
    }
  },
  deleteUser: function(userID) {
    console.log('deleting user', userID);
  },
  deleteClass: function(classID, callback) {
    axios.delete('/api/classroom/' + classID)
    .then(function(response) {
      if (typeof callback === 'function') {
        callback(response);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err);
      }
    });
  },
  addClassroom: function(classObj, callback) {
    console.log('classObj is', classObj);

    axios.post('/api/classroom', classObj)
    .then(function(response) {
      if (typeof callback === 'function') {
        callback(response);
      }
    })
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(err);
      }
    });
  },
  deleteMsg: function(msgID) {
    console.log('deleting message', msgID);
  },
  sendMessage: function(messageObj, callback) {
    console.log('sending message', messageObj);
    axios.post('/api/communication', messageObj)
    .then(function(response) {
      console.log('pushed new message', response);

      let recipientId = [messageObj.recipientId],
          communicationID = response.data.id,
          sendObj = {
            communicationId : communicationID,
            recipients : recipientId,
          };

      axios.post('/api/sendcommunication', sendObj)
      .then(function(response) {
        if (typeof callback === 'function') {
          callback(response);
        }
      })
      .catch(function(errB) {
        console.log('sendcommunication Err', errB);
      });

    })
    .catch(function(err) {
      console.log('sendMessage Err', err);
    });
  }

};
