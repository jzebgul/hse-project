import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import App from './component/App';
//import history from './component/App';
import createHistory from 'history/createBrowserHistory';

//import { history } from './component/App'
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const history = createHistory();
const store = configureStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
const renderApp = () => {
  ReactDOM.render(jsx, document.getElementById('root'));

};

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (user) {
    store.dispatch(login(user));
    history.push('/dashboard');

    renderApp();
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
