import React, { Component } from "react";
import "./SingleArticle.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick() {
    alert("You need to login to view articles!");
  }

  render() {
    const { id, title } = this.props;
    if (this.props.user.isLogged) {
      return (
        <div className="arcticle_single">
          <NavLink to={`article/${id}`} className="article_ref">
            <h2>{title}</h2>
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="arcticle_single">
          <div className="article_ref" onClick={this.handleClick.bind(this)}>
            <h2>{title}</h2>
          </div>
        </div>
      );
    }
  }
}

export default connect((state) => ({
  user: state.loggins,
}))(Article);
