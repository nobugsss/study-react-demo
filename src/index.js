import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import store from '@/store/store';
import AuthorizedRoute from './authorizedRoute.jsx'
// import './index.less';
import example from '@/views/example/example';
import PrimaryLayout from '@/views/login/primaryLayout.jsx';

const App = props => (
  <Provider store={store}>
    <HashRouter>
      <div>
        {/* <MockBrowser /> */}
        <Switch>
          <Route path="/auth" component={example} />
          <AuthorizedRoute path="/app" component={PrimaryLayout} />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker();


// import Route from './router/';
// import store from '@/store/store';
// import {Provider} from 'react-redux';

// const render = Component => {
//   ReactDOM.render(
//     //绑定redux、热加载
//     <Provider store={store}>
//       <Component/>
//     </Provider>,
//     document.getElementById('root'),
//   )
// }

// render(Route);

// registerServiceWorker();
