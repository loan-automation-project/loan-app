const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8060';

export const apiUrl = (path) => `${API_BASE_URL}${path}`;

export default API_BASE_URL;
