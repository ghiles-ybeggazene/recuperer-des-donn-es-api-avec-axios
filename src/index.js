import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './Store'
import { BrowserRouter } from 'react-router-dom'

console.log('store', store)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
