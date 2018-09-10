import axios from 'axios'

const isProdMode = Object.is(process.env.NODE_ENV, 'production');

const $http = axios.create({
  baseURL: isProdMode
    ? '/'
    : 'http://127.0.0.1:3000/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
})

// 添加请求拦截器
$http
  .interceptors
  .request
  .use(function (config) {
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
$http
  .interceptors
  .response
  .use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error)
  });

export default $http
