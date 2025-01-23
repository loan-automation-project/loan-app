import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with actual backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpRequest;
