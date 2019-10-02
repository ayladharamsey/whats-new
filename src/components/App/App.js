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
        selectedNewsCategory: local
      }
  }

  selectCategory = (category) => {
    this.setState({selectedNewsCategory: category})
  }

  searchArticles = (query) => {
    let foundArticle = this.state.selectedNewsCategory.find(article => {
      return article.headline.includes(query)
    })
  }

  render () {
    return (
      <div className="app">
        <h1>What's New?</h1>
        <Menu selectCategory = {this.selectCategory} />
        <div className="primary-section">
          <SearchForm searchArticles = {this.searchArticles}/>
          <NewsContainer newsArticles = {this.state.selectedNewsCategory} />
        </div>
      </div>
    );
  }
}

export default App;
