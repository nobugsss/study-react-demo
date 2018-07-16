import React, {Component} from 'react'
import {connect} from "react-redux";
import { login, loginOut } from "@/store/example/action";

class LoginPage extends Component {
  
  componentWillMount() {
    // debugger
  }
  
  login = ()=> {
    this.props.login(true)
    debugger
    this.props.history.push('/app')
  };
  render() {
    // debugger
    let login = this.props.loginStatus.login;
    return (
      <div>
        <h1>Login Page</h1>
        <button onClick={this.login.bind(this)}>Login{login}</button>
      </div>
    )
  }
}

export default connect(state => {
  // debugger
  return state;
}, {
  login,
  loginOut
})(LoginPage);