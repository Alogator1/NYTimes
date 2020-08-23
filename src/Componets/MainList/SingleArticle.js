import React, { Component } from "react";
import "./SinglArticle.css";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  findArticle() {
      console.log(this.props.id);
  }

  render() {
      const{
          id,
          title
      } = this.props;
    return (
      <div className="arcticle_single" onClick={this.findArticle.bind(this)}>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default Article;
