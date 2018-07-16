import * as home from './action-type';

let defaultState = {
  login: false
}
// 首页表单数据
export const loginStatus = (state = defaultState , action = {}) => {
  // debugger
  switch(action.type){
    case home.LOGIN:
      return {...state, ...{login: action.value}};
    case home.LOGINOUT:
      return {...state, ...defaultState};
    default:
      return state;
  }
}

