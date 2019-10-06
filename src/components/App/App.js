import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'

class App extends Component {
  constructor() {
    super();
      this.state = {
        newsData: [local, health, entertainment, science, technology],
        selectedNewsCategory: local,
        selectedArticle: ''
      }
  };

  selectCategory = (category) => {
    this.setState({selectedNewsCategory: category})
  };

  searchArticles = (query) => {
    let foundArticle = this.state.selectedNewsCategory.find(article => {
      return article.headline.includes(query)
    })
    this.setState({selectedArticle: foundArticle})
  };

  linkOut = (id) => {
    let selected = ''
    this.state.newsData.forEach(newsCategory => {
      selected = newsCategory.find(news => news.id === id)
    });
    window.open(selected.url);
  };

  render () {
    return (
      <div className="app">
        <Menu selectCategory = {this.selectCategory} />
        <div className="primary-section">
          <SearchForm searchArticles = {this.searchArticles}/>
          <NewsContainer newsArticles = {this.state.selectedNewsCategory} selectedArticle = {this.state.selectedArticle} linkOut = {this.linkOut} />
        </div>
      </div>
    );
  };
}

export default App;
