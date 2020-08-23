import React, { Component } from "react";
import "./App.css";
import ArticleList from "./Componets/MainList/ArticleList";
import ArticlePage from "./Componets/ArticlePage/ArticlePage";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Componets/SignIn/SignIn";


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path="/article" component={ArticlePage}/>  
        <Route exact path="/" component={ArticleList}/>
        <Route exact path="/login" component={SignIn}/>
        </Switch>
      </div>
    );
  }
}

export default App;
