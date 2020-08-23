import React, { Component } from 'react';
import Article from './SingleArticle';
import {connect} from "react-redux"
import {getArticles} from "../../actions/articles";
import Button from '@material-ui/core/Button';
import "./ArticleList.css"

class ArticleList extends Component {
   
    render(){
    return ( <div>
        <div>
          <Button onClick={this.props.onGetArticles} variant="contained" className="articleList_button">Load articles</Button>
        </div>
        <div className="articleList_list">
        {this.props.articles.slice(0,50).map((article,index)=>
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
    addArticle: (articleName) =>{
      const payload ={
        _id: Date.now().toString(),
        articleName: articleName
      }
      dispatch({type: "ADD_ARTICLE", payload})
    },
    onGetArticles: ()=>{
      dispatch(getArticles());
    }
  })
  )(ArticleList);