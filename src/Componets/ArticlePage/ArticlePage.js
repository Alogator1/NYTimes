import React from 'react';
import {connect} from "react-redux";
import Header from '../Header/Header';

const ArticlePage = (props) => {

    return ( <div>
        <Header/>
    </div> );
}
 
export default connect(
  state=>({
    articles: state.articles
  }),
  dispatch => ({
    onOpenPage:(id) => {
        dispatch({type:"OPEN_ARTICLE_PAGE", payload: id});
    }
  })
  )(ArticlePage);