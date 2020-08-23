import React, { Component } from "react";
import "./App.css";
import ArticleList from "./Componets/MainList/ArticleList";
import Header from "./Componets/Header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ArticleList />
      </div>
    );
  }
}

export default App;
