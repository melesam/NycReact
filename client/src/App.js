import React, { Component } from 'react';
import Header from "./components/Header";
import ResultsPage from "./pages/ResultsPage";
import SearchPage from "./pages/SearchPage";
import SavedArticles from "./pages/SavedArticles";
import api from "./utility/api";


class App extends Component {
  state = {
    articles: [],
    savedArticles: []
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

        <SearchPage/>

      <div className="row">
          <div className="col-md-6">
            <ResultsPage articles={this.state.articles}/>
          </div>
    
      
        <div className="col-md-6">
          <SavedArticles savedArticles={this.state.savedArticles}/>
        </div>

      </div>
        
      </div>
    );
  }
}

export default App;
