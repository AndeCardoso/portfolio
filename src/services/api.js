import axios from 'axios';

const api = axios.create ({
    baseURL:"https://api.emailjs.com/api",
});

export default api;