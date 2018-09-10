// import * as home from './action-type';
import API from '@/api/api';

let globalState = {
  test: 'test'
}

const $http = (state = globalState , action = {}) => {
  return API
}

export default {
  $http
}