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
    
    // const messages = [
    //   {
    //     id          : 0,
    //     title       : 'This is a message I received 001',
    //     fromUserID  : 2,
    //     fromUser    : "DTrump",
    //     dateTime    : "01/02/2018 00:00:00",
    //     isRead      : false,
    //     msgBody     : 'haha good',
    //   },
    //   {
    //     id          : 1,
    //     title       : 'This is a message I received 002',
    //     fromUserID  : 3,
    //     fromUser    : "VPutin",
    //     dateTime    : "01/04/2018 08:12:22",
    //     isRead      : true,
    //     msgBody     : 'haha bad',
    //   },
    // ];
    // if (typeof callback === 'function') {
    //   callback(messages);
    // }
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
    // const messages = [
    //   {
    //     id          : 2,
    //     title       : 'This is a message I sent 001',
    //     toUserID    : 7,
    //     toUser      : "DJohnson",
    //     dateTime    : "01/24/2018 10:05:10",
    //     msgBody     : 'kaka good',
    //   },
    //   {
    //     id          : 8,
    //     title       : 'This is a message I sent 002',
    //     toUserID    : 10,
    //     toUser      : "BObama",
    //     dateTime    : "02/01/2018 09:12:22",
    //     msgBody     : 'kaka bad',
    //   },
    // ];
    // if (typeof callback === 'function') {
    //   callback(messages);
    // }
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
  deleteClass: function(classID) {
    console.log('deleting class', classID);
  },
  deleteMsg: function(msgID) {
    console.log('deleting message', msgID);
  },
  sendMessage: function(messageObj) {
    console.log('sending message', messageObj);
  }


};
