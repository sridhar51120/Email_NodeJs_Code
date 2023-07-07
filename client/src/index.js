import 'materialize-css/dist/css/materialize.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

//  ./ -> Custom module or Components
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// console.log(process.env.REACT_APP_STRIPE_KEY);
// console.log('ENVIROMENT IS ',process.env.NODE_ENV);