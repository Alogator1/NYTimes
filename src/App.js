import React, { Component } from "react";
import "./App.css";
import ArticleList from "./Componets/MainList/ArticleList";
import Header from "./Componets/Header/Header";
import ArticlePage from "./Componets/ArticlePage/ArticlePage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path="/article/:id" component={ArticlePage}/>  
        <Route exact path="/" component={ArticleList}/>
        </Switch>
      </div>
    );
  }
}

export default App;
