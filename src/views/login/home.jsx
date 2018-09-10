import React, {Component} from 'react'
import {connect} from "react-redux";
import { login, loginOut } from "@/store/example/action";

class Home extends Component {
  componentWillMount() {
    let test = this;
    debugger
    console.log(test)
  }
  
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button>home</button>
      </div>
    )
  }
}

export default connect(state => {
  debugger
  return state;
}, {
  login,
  loginOut
})(Home);