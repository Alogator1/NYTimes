import React, { Component } from 'react';
import Article from './SingleArticle';
import {connect} from "react-redux";
import {getArticles} from "../../actions/articles";
import Button from '@material-ui/core/Button';
import "./ArticleList.css"
import Header from '../Header/Header';

class ArticleList extends Component {
   
    render(){
    return ( <div>
      <Header/>
        <div>
          <Button onClick={this.props.onGetArticles} variant="contained" className="articleList_button">Load articles</Button>
        </div>
        <div className="articleList_list">
        {this.props.articles.map((article,index)=>
            <Article id={article._id} title={article.title} key={index} />
        )}
        </div>
    </div> );
    }
}
 
export default connect(
  state=>({
    articles: state.articles
  }),
  dispatch => ({
    onGetArticles: ()=>{
      dispatch(getArticles());
    }
  })
  )(ArticleList);