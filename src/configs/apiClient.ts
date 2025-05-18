// axiosConfig.js
import axios from 'axios';

import {getStorageData} from '@utils/storage';

import {ENV} from '@configs/env';

const token = getStorageData('accessToken');

export const apiClient = axios.create({
  baseURL: ENV.API_URL,
  timeout: 10000,
  headers: {
    // 'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  },
});

apiClient.interceptors.request.use(
  function (config) {
    console.log('request', (config.baseURL ?? '') + config.url, config.data);
    console.log('---request---', config);
    return config;
  },
  function (error) {
    console.error('Request errors', error);

    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  function (response) {
    console.log('response', response.config.url, response);

    return response;
  },
  function (error) {
    console.error('Response error', error);

    return Promise.reject(error);
  },
);
