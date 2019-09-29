import React, { Component } from 'react';
import './Pages/managePage/App.css';
import './Pages/previewPage/App2.css';
import ManagePage from './Pages/managePage/index'
import PreviewPage from './Pages/previewPage/index'
import Navigation from './Nav'
import './index.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  state = {
    tvShows: []
  }

  componentDidMount = async () => {
    await fetch('http://localhost:3001')
    .then(res => res.json())
    .then(tvShows => {
      this.setState({
        tvShows
      })
    })
  }

  renderTVShows = async () => {
    try{
      const promise = await fetch("http://localhost:3001/getAllTvShows")
      this.setState({
        tvShows: await promise.json()
      })
    } catch(err){
      console.log(err)
    }
  }

    showDeleted = (showIndex) => {
      const tvShow = [...this.state.tvShows];
        tvShow.splice(showIndex, 1);
        this.props.deleteButton({ tvShow: tvShow })
    }
    
    saveTvShow = async (saveTvShow) => {
      try {
        const postCall = await fetch("http://localhost:3001/tvDemo", {
          method:"POST", 
          body: JSON.stringify(saveTvShow),
          headers:{
            "Content-Type": "application/json"
          },
        })
        await postCall
        this.renderTVShows()
      } catch(err){
        console.log(err)
      }
    }
    //   //this.props.saveTVShow
    //   this.setState((priorState)=> ({
    //     tvShows: [...priorState.tvShows, {
    //       name: saveTvShow.name,
    //       rating: saveTvShow.rating,
    //       url: saveTvShow.url
    //     }]
    //   }))
    // };
    
    renderPreviewPage = () => {
      return <PreviewPage shows={this.state.shows} />
    }
    
    deleteShow = async (showToDelete) => {
      await fetch('http://localhost:3001', {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ _id: showToDelete._id })
      }) 
        return this.renderShows()
    }

    renderManagePage = () => <ManagePage 
    saveTvShow={this.saveTvShow} 
    tvShows={this.state.tvShows} 
    deleteShow={this.deleteShow}
    />
    render()
    {
      return (
      <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={this.renderManagePage} />
        <Route path="/previewPage" component={this.renderPreviewPage} />
      </div>
      </Router>
      );
    }
  }

export default App;
