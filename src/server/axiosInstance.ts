import axios from 'axios';
import { API_URL } from './constants';

const axiosInstance = axios.create({
    baseURL: `${ API_URL }`,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use((config) => ({
    ...config,
    success: config.status === 200 || config.status === 201,
}), (error) => {
    // --- Network Errors --- //
    if (!error.response) {
        console.error('Network error');
    }

    // --- Server Errors --- //
    if (error.response && error.response.data) {
        console.error('Server Error', error.response);
    }

    console.error('HTTP :: Non-server error', error);
    
    return Promise.reject(error);
});

export default axiosInstance;
