// API configuration for different environments
const getApiBaseUrl = () => {
  // In development, use the proxy
  if (import.meta.env.DEV) {
    return '';
  }
  
  // In production, use the backend URL
  return import.meta.env.VITE_BACKEND_URL || 'https://directory-project-beige.vercel.app';
};

export const API_BASE_URL = getApiBaseUrl();

// Create axios instance with base configuration
import axios from 'axios';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api; 
