import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
