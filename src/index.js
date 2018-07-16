import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import registerServiceWorker from './registerServiceWorker';

import Route from './router/';
import store from '@/store/store';
import {Provider} from 'react-redux';

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <Component/>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);

registerServiceWorker();
