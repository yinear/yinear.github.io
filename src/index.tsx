import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './app/app';
import { Provider } from 'react-redux';
import reportWebVitals from './app/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import initStore from './shared/redux/store';
import DevTools from './shared/redux/devtools'

const devTools = process.env.NODE_ENV === 'development' ? <DevTools /> : null;
const store = initStore();

render(
  <React.Fragment>
    <Provider store={store}>
      {devTools}
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
