import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
let config = {
    baseURL: "http://127.0.0.1:8000/api/",
    //baseURL: process.env.baseURL || process.env.apiUrl || "",
    timeout: 60 * 1000, // Timeout
    //withCredentials: true, // Check cross-site Access-Control
};

export const api = axios.create(config)

const token = localStorage.getItem('token')
api.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : ""; // Ternery operators if token is set means its not empty , set to "Bearer toekn value" else set to empty

api.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        NProgress.start()
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    function(response) {
        // Do something with response data
        NProgress.done()
        return response;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);