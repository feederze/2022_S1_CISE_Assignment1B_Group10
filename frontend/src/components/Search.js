import React, { Component } from "react";
import axios from "axios";
// import evidence from "./evidenceTable";
// import { response } from "express";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
    };
  }
  Search(Searchinput) {
    let postdate = {
      title: Searchinput,
    };
    axios
      .post("api/article/SearchArticle", postdate)
      .then((res) => {
        this.setState({
          article: res.data,
        });
      })
      .catch((err) => {
        console.log("Error");
      });
  }

  render() {
    const article = this.state.article;
    console.log("Print Book: " + article);
    let articleList;

    if (!article) {
      articleList = "There is no articles record!";
    } else {
      // articles.map();
    }
    return (
      <div>
        <input
          ref={(input) => {
            this.search = input;
          }}
        />
        <br></br>

        <button onClick={() => this.Search(this.search.value)}>Search</button>
        {articleList}
      </div>
    );
  }
}
export default Search;
