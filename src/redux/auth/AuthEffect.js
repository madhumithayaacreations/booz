import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'http://localhost:8080/employee',
  headers: { 'Content-Type': 'application/json' },
});

export const setAuthHeader = (token) => {
  if (token) {
    localStorage.setItem('accessToken', token);
    authInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('accessToken');
    delete authInstance.defaults.headers.common['Authorization'];
  }
};

const AuthEffect = (formData) => {
  return authInstance.request({
    url: '/login',
    method: 'POST',
    data: formData,
  });
};

const SignUpEffect = (data) => {
  return authInstance.request({
    url: '/save',
    method: 'POST',
    data: data,
  });
};

const LogoutEffect = (data) => {
  return authInstance.request({
    url: '/logout',
    method: 'POST',
    data: data,
  });
};

export { AuthEffect, SignUpEffect, LogoutEffect };
