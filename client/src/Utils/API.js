import axios from "axios";

export default {

  sendEmailInvite: function(email, callback) {
    console.log('sending email....');
    if (typeof callback === 'function') {
      callback();
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
