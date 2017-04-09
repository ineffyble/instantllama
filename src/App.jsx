import React, { Component } from 'react';
import './App.css';
import Llama from './Llama.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Instant Llama</h1>
        </div>
        <Llama />
      </div>
    );
  }
}

export default App;
