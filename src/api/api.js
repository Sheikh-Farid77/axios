import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:8000',

});
const token = 'q4w9r5uqkja;ksjdf'


// request interceptor
api.interceptors.request.use((config) => {
  config.headers['Authorization'] = 'Bearer ' + token;

    return config;

}, (error) => {
    return Promise.reject(error);

});

// response interceptor
api.interceptors.response.use((response) => {

    return response

}, (error) => {
    if(error.response){
        error.message = `Error from server status: ${error.response.status}- message: ${error.response.data}`
    }
    return Promise.reject(error)

})

export default api