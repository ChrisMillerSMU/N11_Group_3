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

export const getCompanyPosts = (email) => new Promise((resolve, reject) => {
  axios.get(`${apiEndpoint}/post/by/${email}`, apiConfig)
      .then(x => resolve(x.data))
      .catch(x => {
          alert(x);
          reject(x);
      });
});

export const editPost = (post, success=undefined) => new Promise((resolve, reject) => {
  axios.put(`${apiEndpoint}/post/${post.postID}`, post, apiConfig)
      .then(x =>{
        resolve(x.data)
        if(success){
          success();
        }
      })
      .catch(x => {
          alert(x);
          reject(x);
      });
});

export const addPost = (post, success=undefined) => new Promise((resolve, reject) => {
    axios.post(`${apiEndpoint}/post/`, post, apiConfig)
        .then(x =>{
          resolve(x.data)
          if(success){
            success();
          }
        })
        .catch(x => {
          alert(x);
          reject(x);
        });
});

export const delPost = (postID) => new Promise((resolve, reject) => {
  axios.delete(`${apiEndpoint}/post/${postID}`, apiConfig)
      .then(x =>resolve(x.data))
      .catch(x => {
        alert(x);
        reject(x);
      });
});

export const addInterest = (interest) => new Promise((resolve, reject) => {
    axios.post(`${apiEndpoint}/interst`, interest, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const findInterest = (body) => new Promise((resolve, reject) => {
  axios.post(`${apiEndpoint}/interst/find`, body, apiConfig)
      .then(x => resolve(x.data))
      .catch(x => {
          alert(x);
          reject(x);
      });
});

export const addSubmission = (submission) => new Promise((resolve, reject) => {
  axios.post(`${apiEndpoint}/submission`, submission, apiConfig)
      .then(x => resolve(x.data))
      .catch(x => {
          alert(x);
          reject(x);
      });
});

export const findSubmission = (postID, success = undefined) => new Promise((resolve, reject) => {
  console.log(postID);
axios.get(`${apiEndpoint}/submission/ID/${postID}`, apiConfig)
    .then(x => {
          resolve(x.data)
          // if(x.data.length > 0){
          //   success(true);
          // }
          // else{
          //   success(false);
          // }
        })
    .catch(x => {
      alert(x);
      reject(x);
    });
});

export const findSubmissionByAthlete = (postID, athlete, success = undefined) => new Promise((resolve, reject) => {
  axios.get(`${apiEndpoint}/submission/athlete/${postID}/${athlete}`, apiConfig)
      .then(x => {
            resolve(x.data)
            if(x.data.length > 0){
              success(true);
            }
            else{
              success(false);
            }
          })
      .catch(x => {
        alert(x);
        reject(x);
      });
  });

export const registerAthlete = (user, success=undefined) => new Promise((resolve, reject) => {
  axios.post(`${apiEndpoint}/athlete/`, user, apiConfig)
      .then(x =>{
        resolve(x.data)
        if(success){
          success();
        }
      })
      .catch(x => {
          alert(x);
          reject(x);
      });
});

export const registerCompany = (user, success=undefined) => new Promise((resolve, reject) => {
    axios.post(`${apiEndpoint}/company/`, user, apiConfig)
        .then(x => {
          resolve(x.data)
          if(success){
            success();
          }
        })
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const login = (info, success=undefined, isAthlete) => new Promise((resolve, reject) => {
    axios.post(`${apiEndpoint}/session/${isAthlete}`, info, apiConfig)
        .then(x => {
          token = x.data;
          apiConfig = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          };
          resolve(x.data);
          if(success){
            success();
          }
        })
        .catch(x => {
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
