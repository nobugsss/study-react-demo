import React from 'react'
import {
  HashRouter as Router, Route, Link,
  // withRouter
} from 'react-router-dom'
import {connect} from "react-redux";

import exampleA from "@/views/example/example";
import example from "../App";

import createHashHistory from 'history/createHashHistory'

const history = createHashHistory()


class Intercept extends React.Component {
  componentDidMount() {
    this.props.history.listen = () => {
      debugger
    }
  }
  render() {
    return (
      <div>
        111
      </div>
    );
  }
}

const routes = [
  {
    path: '/tacos',
    component: Intercept,
    routes: [
      {
        path: '/tacos/bus',
        component: exampleA
      }, {
        path: '/tacos/cart',
        component: example
      }
    ]
  }, {
    path: '/test',
    component: example
  }
]


const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    render={(props) => (<route.component {...props} routes={route.routes}/>)}/>
)

// 原生js路由监听
window.addEventListener('hashchange', (e) => {
  console.log('原生js路由监听')
})

class App extends React.Component {
  componentWillReceiveProps() {
    // debugger
  }
  componentDidMount() {
    // debugger
  }
  render() {
    return (
      <Router>
        <div>
          <Link to='/test'>app</Link>
          {/* <Route path="/" component={intercept}>
          </Route> */}
          {routes.map((route) => (<RouteWithSubRoutes key={route.path} {...route}/>))}
        </div>
      </Router>
    )
  }
}

export default connect(state => state, {})(App)