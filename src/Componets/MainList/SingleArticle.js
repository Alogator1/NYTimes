import React, { Component } from "react";
import "./SingleArticle.css";
import { NavLink } from "react-router-dom";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  findArticle() {
      
  }

  render() {
      const{
          id,
          title
      } = this.props;
    return (
      <div className="arcticle_single" onClick={this.findArticle.bind(this)}>
        <NavLink to={`article/${id}`} className="article_ref"><h2>{title}</h2></NavLink>
      </div>
    );
  }
}

export default Article;
