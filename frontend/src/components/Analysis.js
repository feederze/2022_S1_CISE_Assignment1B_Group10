import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Styles from "./tableStyle";
import Table from "./evidenceTable";
import tablecolumns from "./tableColumnWithButtons";

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    let postdate = {
      state: "moderated",
    };
    axios
      .post("api/article/search_article_state", postdate)
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowArticlesList");
      });
  }
  Analysis(id) {
    axios.post("api/article/analysis/" + id);
    window.location.reload(false);
  }
  render() {
    const articles = this.state.articles;
    console.log("Print Book: " + articles);
    let articleList;

    if (!articles) {
      articleList = "There is no article recorded!";
    } else {
      articles?.forEach(
        (article) =>
          (article.action = (
            <button onClick={() => this.Analysis(article._id)}>Analysis</button>
            // <Link to={`../api/article/moderate/${article._id}`}>{"Moderate"}</Link>
          ))
      );
      articleList = articles.map((article, k) => (
        <Table article={article} key={k} />
      ));
    }
    return (
      <div>
        <Styles>
          <Table data={articles} columns={tablecolumns} />
        </Styles>
      </div>
    );
  }
}
export default Analysis;
