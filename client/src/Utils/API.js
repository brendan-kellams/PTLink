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
        firstName : 'Donald',
        lastName  : 'Trump',
        role      : false,
      },
      {
        userID    : 1,
        firstName : 'Dwayne',
        lastName  : 'Johnson',
        role      : false,
      },
      {
        userID    : 2,
        firstName : 'Greg',
        lastName  : 'Lee',
        role      : true,
      }
    ];

    if (typeof callback === 'function') {
      callback(yourUsers);
    }
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
