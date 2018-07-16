import React,{Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {connect} from "react-redux";
import Home from '@/views/login/home.jsx'


// const PrimaryLayout = ({ match }) => (
//   <div className="primary-layout">
//     {/* <PrimaryHeader /> */}
//     <main>
//       <Switch>
//         <Route path={`${match.path}`} exact component={Home} />
//         <Redirect to={`${match.url}`} />
//       </Switch>
//     </main>
//   </div>
// )

class PrimaryLayout extends Component {
  render() {
    debugger
    let match = this.props.match;
    return(
      <div className="primary-layout">
        {/* <PrimaryHeader /> */}
        <main>
          <Switch>
            <Route path={`${match.path}`} exact component={Home} />
            <Redirect to={`${match.url}`} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default connect(state => {
  // debugger
  return state;
})(PrimaryLayout);