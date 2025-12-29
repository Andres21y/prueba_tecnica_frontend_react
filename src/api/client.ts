/**importacion de las variables de entorno */
const AUTH_URL = import.meta.env.VITE_URL_AUTH;
const API_URL = import.meta.env.VITE_URL_API;

type baseType = 'auth' | 'api';

export const apiFetch = async (
    endpoint: string,
    options: RequestInit = {},
    base: baseType = 'api') => {

    const url = base === 'auth' ? AUTH_URL : API_URL;
    const token = localStorage.getItem('token');

    const headers:HeadersInit = {
        'content-type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...options.headers
    }

    const response = await fetch(
        `${url}${endpoint}`,
        { ...options, headers }
    );

    if (!response.ok) {
        const errorMessage = await response.json().catch(() => null);
        throw new Error(errorMessage.message || 'Request error')
    }

    return response.json()
}