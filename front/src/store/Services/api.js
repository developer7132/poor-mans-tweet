import axios from "axios";
var urlPrefix = 'http://localhost:8000/api/v1'

export async function get(subURL) {
  return axios
    .get(`${urlPrefix}/${subURL}/`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("Error " + error);
      return error;
    });
}

export async function post(subURL, data) {
  return axios
    .post(`${urlPrefix}/${subURL}/`, data)
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log("error" + error);
      return error;
    });
}