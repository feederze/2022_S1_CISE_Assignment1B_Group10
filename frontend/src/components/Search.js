import React, { Component } from 'react';
import axios from 'axios';
import Dropdown from './dropDown';
import ArticleCard from './ArticleCard';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      source: '',
      date: '',
      doi: '',
      practice: '',
      claimed: '',
      evidence: '',
      state: 'not moderated',
    };
  }
  Search(Searchinput) {
    let postdate = {
      title: Searchinput,
    };
    axios;
    // .post('//heroku link', postdate)
    // .then(res => {
    //   this.setState({
    //     articles: res.data
    //   })
    // })
    // .catch(err =>{
    //   console.log('Error from ShowArticlesList');
    // })
  }

  render() {
    const articles = this.state.articles;
    console.log('PrintBook: ' + articles);
    let articleList;

    if (!articles) {
      articleList = 'There is no article recorded!';
    } else {
      articleList = articles.map((article, k) => (
        <ArticleCard article={article} key={k} />
      ));
    }

    return (
      <div>
        <input
          ref={input => {
            this.search = input;
          }}
        />

        <button onClick={() => this.Search(this.search.value)}>Search</button>
        {articleList}
      </div>
    );
  }
}
export default Search;
