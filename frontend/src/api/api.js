import axios from 'axios';

var token;
const apiEndpoint = 'http://localhost:3001';
var apiConfig;

export const getToken = () => {
  return token;
}

export const getPostById = (postID) => new Promise((resolve, reject) => {
    axios.get(`${apiEndpoint}/post/${postID}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getAthleteByEmail = (email) => new Promise((resolve, reject) => {
  axios.get(`${apiEndpoint}/athlete/${email}`, apiConfig)
      .then(x => resolve(x.data))
      .catch(x => {
          alert(x);
          reject(x);
      });
});

export const getCompanyByEmail = (email) => new Promise((resolve, reject) => {
  axios.get(`${apiEndpoint}/company/${email}`, apiConfig)
      .then(x => resolve(x.data))
      .catch(x => {
          alert(x);
          reject(x);
      });
});

export const getPosts = (params) => new Promise((resolve, reject) => {
    axios.get(`${apiEndpoint}/post`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const addPost = (post) => new Promise((resolve, reject) => {
    axios.post(`${apiEndpoint}/post/`, post, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
          alert(x);
          reject(x);
        });
});

export const addInterest = (post) => new Promise((resolve, reject) => {
    axios.post(`${apiEndpoint}/interst`, post, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const register = (user) => new Promise((resolve, reject) => {
    axios.post(`${apiEndpoint}/user/`, user, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const athleteLogin = (info, success=undefined) => new Promise((resolve, reject) => {
    axios.post(`${apiEndpoint}/session/true`, info, apiConfig)
        .then(x => {
          token = x.data;
          apiConfig = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          };
          resolve(x.data);
          success();
        })
        .catch(x => {
          reject(x);
        });
});

export const companyLogin = (info, success=undefined) => new Promise((resolve, reject) => {
  axios.post(`${apiEndpoint}/session/false`, info, apiConfig)
      .then(x => {
        token = x.data;
        apiConfig = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        resolve(x.data);
        success();
      })
      .catch(x => {
        reject(x);
      });
});

export const editUser = (username, params) => new Promise((resolve, reject) =>{
  axios.put(`${apiEndpoint}/user/${username}`, params, apiConfig)
  .then(x => resolve(x.data))
  .catch(x => {
    alert(x);
    reject(x);
  });
});

export const getUserInfo = () => new Promise((resolve, reject) => {
    axios.get(`${apiEndpoint}/session/`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
          alert(x);
          reject(x);
        });
});

export const getReviews = (id) => new Promise((resolve, reject) => {
    axios.get(`${apiEndpoint}/review/land/${id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
          alert(x);
          reject(x);
        });
});
