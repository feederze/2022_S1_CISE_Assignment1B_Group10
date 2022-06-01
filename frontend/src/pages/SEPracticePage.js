import React, { Component } from "react";
//import articles from "../dummyData/articles";

import Styles from "../components/tableStyle";
import Table from "../components/evidenceTable";
import tablecolumns from "../components/tableColumns";
import Dropdown from "../components/dropDown";

//this is an env.js file in src folder, import files must be located inside the src folder.
import SEPractices from "../dummyData/SEPractices";
import axios from "axios";
import '../App.css';

// Drop down menu.
const optionItems = SEPractices.map((SEPractice) => (
  <option key={SEPractice.practice}>{SEPractice.practice}</option>
));

class SEPracticePage extends Component {

  //this state is used for select articles
  //displayedArticle is used for filter if needed

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      displayedArticles: [],
    };
  }

  //this is called, before browser render the page 
  componentDidMount() {
    axios.get("api/article")
      .then(res => {
        console.log(res.data);
        this.setState({
          articles: res.data
        })
        /*
        //update the state then render it again
        this.setState({
          //filter is used for future features: modera & analys
          articles: res.data.filter((item) => item["Passed"]),
        });
        */
      }).catch((e) => console.log("No Articles are Found"));
  }

  render() {
    const articles = this.state.articles;
    console.log("PrintBook: " + articles);
    let articleList;

    if (!articles) {
      articleList = "Nothing in database.";
    } else {
      articleList = articles.map((article, k) =>
        <Table article={article} key={k} />);
    }

    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Dropdown />
        <Styles>
          <Table
            data={articles}
            columns={tablecolumns}
          />
        </Styles>
      </div>
    );
  }
}

export default SEPracticePage;

