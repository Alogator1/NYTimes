import React, { Component } from 'react';
import './App.css';
import ArticleList from './Componets/MainList/ArticleList';
import Header from './Componets/Header';





class App extends Component {

  render() { 
    return ( 
      <div>
        <Header/>
        <ArticleList/>
        {/* <ul>
          {this.props.articles.slice(0,50).map((article,index)=>
          <li key={index}>{article.title}</li>
          )}
        </ul> */}
      </div>
     );
  }
}

export default App;
