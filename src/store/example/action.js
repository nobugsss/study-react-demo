import * as home from './action-type';

// login
export const login = (value, datatype) => {
  // debugger
  return {
    type: home.LOGIN,
    value,
    datatype,
  }
}
// loginOut
export const loginOut = (value, datatype) => {
  return {
    type: home.LOGINOUT,
    value,
    datatype,
  }
}


