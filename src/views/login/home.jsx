import React, {Component} from 'react'
import {connect} from "react-redux";
import { login, loginOut } from "@/store/example/action";

class Home extends Component {
  componentWillMount() {
    console.log(this)
  }
  
  handleClick(name) {
    console.log(this);
    console.log(name)
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={() => this.handleClick('隔壁老王')}>home</button>
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
})(Home);