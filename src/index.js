import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { login, logout } from './actions/auth';
import { clearTasks } from './actions/taskActions';
import {firebase} from './firebase/firebase';
import App from './component/App';

import { createBrowserHistory } from "history";


//import history from './component/App';

//import { history } from './component/App'
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const store = configureStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
const renderApp = () => {
  ReactDOM.render(jsx, document.getElementById('root'));
};

export const browserHistory = createBrowserHistory();

renderApp();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('Logging in');
    store.dispatch(login(user));
    browserHistory.push('/dashboard');
  } else {
    console.log('Logging out');
    store.dispatch(logout());
    store.dispatch(clearTasks());
    browserHistory.push('/');
  }
});
