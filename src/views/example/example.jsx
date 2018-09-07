import React,{Component} from 'react'
import {connect} from "react-redux";

class PrimaryLayout extends Component {
  render() {
    return(
      <div className="primary-layout">
        1111
      </div>
    )
  }
}

export default connect(state => {
  // debugger
  return state;
})(PrimaryLayout);
