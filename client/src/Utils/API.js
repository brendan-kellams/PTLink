import axios from "axios";

export default {
  /* Below are example interfaces */

  sendEmailInvite: function(email, callback) {
    console.log('sending email....');
    if (typeof callback === 'function') {
      callback();
    }
  }
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
