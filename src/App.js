import React, { Component } from 'react';
import Header from './components/Header';
import Map from './components/Map';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Map/>
      </div>
    );
  }
}

export default App;
