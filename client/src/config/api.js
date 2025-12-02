// API configuration
// In production, set VITE_API_URL to your backend URL
// In development, Vite proxy handles /api routes
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const apiUrl = (path) => {
  // If API_BASE_URL is set, use it (production)
  // Otherwise, use relative path (development with proxy)
  return API_BASE_URL ? `${API_BASE_URL}${path}` : path;
};

