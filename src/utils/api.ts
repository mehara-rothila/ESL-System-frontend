// This will be the base API client for our application

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function fetchWithAuth(url: string, options: RequestInit = {}) {
  // In a real application, we would get the token from localStorage or cookies
  let token = '';
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('auth_token') || '';
  }
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...options.headers,
  };
  
  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || 'An error occurred while fetching data');
  }
  
  return response.json();
}

export const api = {
  get: (url: string) => fetchWithAuth(url),
  
  post: (url: string, data: any) => fetchWithAuth(url, {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  put: (url: string, data: any) => fetchWithAuth(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  delete: (url: string) => fetchWithAuth(url, {
    method: 'DELETE',
  }),
};