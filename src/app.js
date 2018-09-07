import React from 'react'
import {HashRouter, Switch, Route } from 'react-router-dom'
import routers from '@/router'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        {
          routers.map((r, key) => (
            <Route component={r.component}
              exact={!!r.exact}
              key={key}
              path={r.path}
            />
          ))
        }
      </Switch>
    </HashRouter>
  )
}
export default App
