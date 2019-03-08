import React, { Component } from 'react';
import './App.css';
import Meme from './components/Meme/Meme'


class App extends Component {
  render() {
    return (
      <div className="app">
      <Meme/>
     </div>
  );
}
}


export default App;
