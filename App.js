import React, { Component } from 'react';
import './Pages/managePage/App.css';
import './Pages/previewPage/App2.css';
import ManagePage from './Pages/managePage/index'
import PreviewPage from './Pages/previewPage/index'
import Navigation from './Nav'
import './index.css'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    tvShows: []
  }

    //is deleteButton same as showDeleted?
    deleteButton = (showIndex) => {
        const tvShow = [...this.state.tvShows];
        tvShow.splice(showIndex, 1);
        this.props.deleteButton({ tvShow: tvShow })
    }

    //why is this.setState required? working on **Update saveShow** step in phase 1
    
    saveTvShow = (saveTvShow) => {
      
      //this.props.saveTVShow
      this.setState((priorState)=> ({
        tvShows: [...priorState.tvShows, {
          name: saveTvShow.name,
          rating: saveTvShow.rating,
          url: saveTvShow.url
        }]
      }))
    };

    renderManagePage = () => <ManagePage saveTvShow={this.saveTvShow} tvShows={this.state.tvShows} />
    render()
    {
      return (<div className="App">
        <Navigation />
        <Route exact path="/" component={this.renderManagePage} />
        <Route path="/previewPAge" component={PreviewPage} />
      </div>);
    }
  }

export default App;
