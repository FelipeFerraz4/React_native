import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.209.220:3000/',
});

export default api;
