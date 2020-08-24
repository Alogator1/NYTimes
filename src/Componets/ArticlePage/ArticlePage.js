import React from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import "./ArticlePage.css";
import { Redirect } from "react-router";

const ArticlePage = (props) => {
  console.log(props.article);
  try {
    if (!props.article[0]) throw "Error";
  } catch (e) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Header />
      <div className="articlePage_main">
        <h1 className="articlePage_header">{props.article[0].title}</h1>
        <h4>{props.article[0].lead_paragraph}</h4>
        <p>&copy; {props.article[0].source}</p>
      </div>
    </div>
  );
};

export default connect((state) => ({
  article: state.articles.filter((article) =>
    article._id.includes(
      window.location.href.substr(window.location.href.indexOf("/article/") + 9)
    )
  ),
}))(ArticlePage);
