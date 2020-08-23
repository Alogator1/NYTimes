import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from "redux"; 
import {composeWithDevTools}  from "redux-devtools-extension";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import * as serviceWorker from './serviceWorker';

import App from './App';
import reducer from "./reducers/index"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from './Componets/SignIn/SignIn';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App/>
  </Provider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
