import React from 'react';
import {connect} from "react-redux";
import Header from '../Header/Header';

const ArticlePage = (props) => {
    
    console.log(props.article);

    return ( <div>
        <Header/>
        {props.article[0].title}
    </div> );
}
 
export default connect(
  state=>({
    article: state.articles.filter(article=>article._id.includes(window.location.href.substr(window.location.href.indexOf('/article/')+9)))
  })
  )(ArticlePage);