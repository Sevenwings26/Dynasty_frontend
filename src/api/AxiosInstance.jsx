// import axios from 'axios'

// // const baseUrl = import.meta.env.VITE_URL_API;
// const baseUrl = "http://127.0.0.1:8000/"

// const AxiosInstance = axios.create({
//     baseURL: baseUrl,
//     timeout: 5000, 
//     headers:{
//         "Content-Type":"application/json",
//          accept: "application/json"
//     }
// })

// AxiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('Token')
//         if(token){
//             config.headers.Authorization = `Token ${token}`
//         }
//         else{
//             config.headers.Authorization = ``
//         }
//         return config;
//     }
// )

// AxiosInstance.interceptors.response.use(
//     (response) => {
//         return response
//     }, 
//     (error) => {
//         if(error.response && error.response.status === 401){
//             localStorage.removeItem('Token')
//         }
//         return Promise.reject(error);
//     }
// )

// export default AxiosInstance;


// // // axiosInstance.js
// // import axios from 'axios';

// // const baseUrl = "http://127.0.0.1:8000/";

// // const AxiosInstance = axios.create({
// //     baseURL: baseUrl,
// //     timeout: 5000, 
// //     headers: {
// //         "Content-Type": "application/json",
// //         accept: "application/json",
// //     }
// // });

// // AxiosInstance.interceptors.request.use((config) => {
// //     const token = localStorage.getItem('Token');
// //     if (token) {
// //         config.headers.Authorization = `Token ${token}`;
// //     } else {
// //         config.headers.Authorization = '';
// //     }
// //     return config;
// // });

// // AxiosInstance.interceptors.response.use(
// //     (response) => response,
// //     (error) => {
// //         if (error.response && error.response.status === 401) {
// //             localStorage.removeItem('Token');
// //         }
// //         return Promise.reject(error);
// //     }
// // );

// // export default AxiosInstance;


import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/";

const AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000, 
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    }
});

AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('Token');
        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }
        return config;
    }
);

AxiosInstance.interceptors.response.use(
    (response) => {
        // If login, store both the token and username
        if (response.config.url.includes('login') && response.data.token) {
            localStorage.setItem('Token', response.data.token);
            localStorage.setItem('Username', response.data.user.username); // Store username
        }
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('Token');
            localStorage.removeItem('Username'); // Clear username on error
        }
        return Promise.reject(error);
    }
);

export default AxiosInstance;
