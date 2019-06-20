import React, { Component } from 'react'
import './App.css';
import Main from './Main'
import FullCardView from './FullCardView'

import store from './Store'
import {Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={Main} />
          <Route exact path="/:id" component={FullCardView} />
        </main>
      </div>
    );
  }
}

export default App;
