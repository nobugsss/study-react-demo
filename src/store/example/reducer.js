import * as home from './action-type';

let defaultState = {
  login: false
}
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

