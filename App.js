import React from 'react';
import './Pages/managePage/App.css';
import './Pages/previewPage/App2.css';
import ManagePage from './Pages/managePage/index'
import PreviewPage from './Pages/previewPage/index'
import Navigation from './Nav'
import './index.css'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route exact path="/" component={ManagePage} />
      <Route path="/previewPAge" component={PreviewPage} />
    </div>
  );
}

export default App;
