import axios from "axios";

export default {

  signUpUser: function(user, callback) {
    axios.post('./user/signup', user)
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
  sendEmailInvite: function(email, callback) {
    console.log('sending email....');
    if (typeof callback === 'function') {
      callback();
    }
  },
  getMyClasses: function(callback) {
    console.log('calling API to classes I have access to');

    const yourClasses = [
      {
        classID : 0,
        period    : 1,
        name      : 'Math 101',
        school    : 'Murray Manor Elementry',
        term      : 'Winter',
        year      : '2018',
      },
      {
        classID : 1,
        period    : 6,
        name      : 'English 1A',
        school    : 'University of California, San Diego',
        term      : 'Fall',
        year      : '2017',
      },
      {
        classID : 2,
        period    : 2,
        name      : 'Rocket Science 202B',
        school    : 'Murray Manor Elementry',
        term      : 'Summer',
        year      : '2017',
      },
    ];

    if (typeof callback === 'function') {
      callback(yourClasses);
    }
  },
  setMessageRead: function(msgID, callback) {
    console.log('calling API to mark a message as READ');
    if (typeof callback === 'function') {
      callback();
    }
  },
  getMessagesReceived: function(callback) {
    console.log('calling API to get messages I received');
    const messages = [
      {
        id          : 0,
        title       : 'This is a message I received 001',
        fromUserID  : 2,
        fromUser    : "DTrump",
        dateTime    : "01/02/2018 00:00:00",
        isRead      : false,
        msgBody     : 'haha good',
      },
      {
        id          : 1,
        title       : 'This is a message I received 002',
        fromUserID  : 3,
        fromUser    : "VPutin",
        dateTime    : "01/04/2018 08:12:22",
        isRead      : true,
        msgBody     : 'haha bad',
      },
    ];
    if (typeof callback === 'function') {
      callback(messages);
    }
  },
  getMessagesSent: function(callback) {
    console.log('calling API to get messages I sent out');

    const messages = [
      {
        id          : 2,
        title       : 'This is a message I sent 001',
        toUserID    : 7,
        toUser      : "DJohnson",
        dateTime    : "01/24/2018 10:05:10",
        msgBody     : 'kaka good',
      },
      {
        id          : 8,
        title       : 'This is a message I sent 002',
        toUserID    : 10,
        toUser      : "BObama",
        dateTime    : "02/01/2018 09:12:22",
        msgBody     : 'kaka bad',
      },
    ];
    if (typeof callback === 'function') {
      callback(messages);
    }
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



  /* Below are example interfaces */
  // getArticles: function(query = '') {
  //   return axios.get(BASEURL + APIKEY + query);
  // },

  // saveArticle: function(articleObj) {
  //   console.log('API: axios doing POST', articleObj);
  //   return axios.post('/api/articles', articleObj);
  // },

  // getSavedArticles: function() {
  //   console.log('API: getting saved articles');
  //   return axios.get('/api/articles');
  // },

  // deleteSavedArticle: function(id) {
  //   return axios.post(`/api/delete-article/${id}`);
  // }

};
