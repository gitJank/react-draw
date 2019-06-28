import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import App from './App/App';
import './index.css';

import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
