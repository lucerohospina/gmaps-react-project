import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Greeting from './components/Greeting';
import './App.css';

const App = () => (
  <div className="bg-color">
    <Header/>
    <Map/>
    <Greeting/>
  </div>

);

export default App;
