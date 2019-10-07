import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            query: ""
        }
    };

    submitQuery = event => {
        this.setState({[event.target.name]: [event.target.value]})
    };

    handleSumbit = event => {
        event.preventDefault();
        const search = this.state.query;
        this.setState({query:""});
        this.props.searchArticles(search);
    };

    reset = () => {
        this.setState({
          query: ""
        })
      };

    render() {
        return (
            <form>
                <input type="text" name="query" value={this.state.query} onChange={this.submitQuery} />
                <button onClick={this.handleSumbit}>Search</button>
                <button onClick={this.reset}> Reset </button>
            </form>
        )

    };
}

export default SearchForm;