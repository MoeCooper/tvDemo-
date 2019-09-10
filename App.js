import React, { Component } from 'react';
import './Pages/managePage/App.css';
import './Pages/previewPage/App2.css';
import ManagePage from './Pages/managePage/index'
import PreviewPage from './Pages/previewPage/index'
import Navigation from './Nav'
import './index.css'
import { Route } from 'react-router-dom'
import SideNav from './sideNav/TVShow'

class App extends Component {
  constructor() {
      super()
      this.state = {
        tvShow: 
          {
            newName: "",
            newRating: "3",
            newUrl: "https://www.blank.com"
          },
        shows: []
      }
    }
    // deleteButton = (showIndex) => {
    //     const tvShow = [...this.state.tvShows];
    //     tvShow.splice(showIndex, 1);
    //     this.setState({ tvShow: tvShow })
    // }
    saveTVshow = (showToSave) => {
      let shows = [];
      for (let i = 0; i < this.state.shows.length; i++) {
        return shows.push(<SideNav name={shows.title} tvShowSelected={(e) => {
        } } />);
      }
    };
    render()
    {
      return (<div className="App">
        <Navigation />
        <Route exact path="/" component={ManagePage} />
        <Route path="/previewPAge" component={PreviewPage} />
      </div>);
    }
  }

export default App;
