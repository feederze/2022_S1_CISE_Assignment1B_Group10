import React, { Component } from "react";
import axios from "axios";

import Styles from "../components/tableStyle";
import Table from "../components/evidenceTable";
import tablecolumns from "../components/tableColumns";
import Dropdown from "../components/dropDown";

// import evidence from "./evidenceTable";
// import { response } from "express";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  Search(Searchinput) {
    let postdate = {
      title: Searchinput,
    };
    axios
      .post("api/article/search_article", postdate)
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowArticlesList");
      });
  }

  render() {
    const articles = this.state.articles;
    console.log("Print Book: " + articles);
    let articleList;

    if (!articles) {
      articleList = "there is no articles record!";
    } else {
      articleList = articles.map((article, k) => (
        <Table article={article} key={k} />
      ));
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
        <br></br> <br></br>
        <Styles>
          <Table data={articles} columns={tablecolumns} />
        </Styles>
      </div>
    );
  }
}
export default Search;
