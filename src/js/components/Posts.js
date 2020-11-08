import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends Component {
  componentDidMount() {
    this.props.getData("https://api.valentinog.com/api/link/");
  }

  render() {
    return (
      <ul>
        {this.props.articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

export default connect(mapStateToProps, { getData })(Post);