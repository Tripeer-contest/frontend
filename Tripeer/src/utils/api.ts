import axios from 'axios';
import cookie from 'js-cookie';

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
  timeout: 20000,
});

const getAuthorizationToken = () => {
  return cookie.get('Authorization');
};

const rePost = async () => {
  return await axios.post('/api/user/reissue', {}, { withCredentials: true });
};

api.interceptors.request.use(async (config) => {
  const authorization = getAuthorizationToken();

  if (authorization) {
    config.headers['Authorization'] = `Bearer ${authorization}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        await rePost();
        const newAuthorization = getAuthorizationToken();

        if (newAuthorization) {
          const config = error.config;
          config.headers['Authorization'] = `Bearer ${newAuthorization}`;
          return axios(config);
        }
      } catch (reissueError) {
        console.log('Reissue Failed : ', reissueError);
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  },
);

export default api;
