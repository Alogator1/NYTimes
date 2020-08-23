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
    <Switch>
      <Route path="/" exact>
    <App />
    </Route>
    <Route path="/login" exact>
    <SignIn />
    </Route>
    </Switch>
  </Provider>
  </Router>,
  document.getElementById('root')
);

// store.subscribe(()=>{
//   console.log("subscribe", store.getState());
// })

// store.dispatch({
//   type: "ADD_ARTICLE",
//   payload: "Added article"
// })
// store.dispatch({
//   type: "ADD_ARTICLE",
//   payload: "Added second article"
// })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
