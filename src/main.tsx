import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoot from './root'
import 'antd/dist/reset.css';           // antd styles
import './assets/styles/global.scss'    // global styles define
import { Provider } from 'react-redux';
import store from './store';
import { App } from 'antd';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App>
      <AppRoot />
    </App>
  </Provider>
)
