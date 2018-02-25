import React, { Component } from 'react';
import Header from "./components/Header";
import ResultsPage from "./pages/ResultsPage";
import SearchPage from "./pages/SearchPage";
import SavedArticles from "./pages/SavedArticles";
import api from "./utility/api";


class App extends Component {
  state = {
    articles: []
  }

  componentDidMount = () => {
    api.getNYTSearch()
    .then(res =>{
      this.setState({
        articles: res.data
      });
    });
  }

  render() {
    return (
      <div className="text-center">
        <Header/>

        
        <ResultsPage articles={this.state.articles}/>
        <SearchPage/>
        <SavedArticles/>
        <p>This is my app</p>
      </div>
    );
  }
}

export default App;
