import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

const AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000, 
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


// import axios from 'axios';
// // Function to get the CSRF token from cookies
// const getCookie = (name) => {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// };

// // Base URL for API requests
// const baseUrl = import.meta.env.VITE_API_URL;

// // Create an Axios instance
// const AxiosInstance = axios.create({
//     baseURL: baseUrl,
//     timeout: 10000, 
//     headers: {
//         "Content-Type": "application/json",
//         accept: "application/json",
//         'Authorization': `Bearer ${token}`, 
//     }
// });

// // Add the CSRF token to the headers of each request
// AxiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('Token');
//         const csrfToken = getCookie('csrftoken'); // Get CSRF token from cookie
//         if (token) {
//             config.headers.Authorization = `Token ${token}`;
//         }
//         if (csrfToken) {
//             config.headers['X-CSRFToken'] = csrfToken; // Attach CSRF token
//         }      
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // Handle responses
// AxiosInstance.interceptors.response.use(
//     (response) => {
//         // If login, store both the token and username
//         if (response.config.url.includes('login') && response.data.token) {
//             localStorage.setItem('Token', response.data.token);
//             localStorage.setItem('Username', response.data.user.username); // Store username
//         }
//         return response;
//     },
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             localStorage.removeItem('Token');
//             localStorage.removeItem('Username'); // Clear username on error
//         }
//         return Promise.reject(error);
//     }
// );
// export default AxiosInstance;


// import axios from 'axios';

// // Function to get the CSRF token from cookies
// const getCookie = (name) => {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// };

// // Base URL for API requests
// const baseUrl = import.meta.env.VITE_API_URL; // Ensure this is set in your environment variables

// // Create an Axios instance
// const AxiosInstance = axios.create({
//     baseURL: baseUrl,
//     timeout: 10000, // Set timeout for the request
//     headers: {
//         "Content-Type": "application/json",
//         accept: "application/json",
//     }
// });

// // Add the CSRF token and Knox token to the headers of each request
// AxiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('Token'); // Get Knox token from localStorage
//         const csrfToken = getCookie('csrftoken'); // Get CSRF token from cookies (if applicable)

//         // Add the Knox token to the Authorization header
//         if (token) {
//             config.headers.Authorization = `Token ${token}`; // Use 'Token' for Knox token authentication
//         }

//         // Add CSRF token if available
//         if (csrfToken) {
//             config.headers['X-CSRFToken'] = csrfToken;
//         }

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // Handle responses
// AxiosInstance.interceptors.response.use(
//     (response) => {
//         // If login, store both the token and username
//         if (response.config.url.includes('login') && response.data.token) {
//             localStorage.setItem('Token', response.data.token); // Store the Knox token
//             localStorage.setItem('Username', response.data.user.username); // Store the username
//         }
//         return response;
//     },
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             // If authentication fails, clear the token and username
//             localStorage.removeItem('Token');
//             localStorage.removeItem('Username');
//         }
//         return Promise.reject(error);
//     }
// );

// export default AxiosInstance;
