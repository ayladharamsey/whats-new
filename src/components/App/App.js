import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'

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

  render () {
    return (
      <div className="app">
        <Menu selectCategory = {this.selectCategory} />
        <NewsContainer newsArticles = {this.state.selectedNewsCategory} />
      </div>
    );
  }
}

export default App;
