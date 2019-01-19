import React, { Component } from 'react';

import BackgroundImage from './common/BackgroundImage'; // Not being used yet
import Header from './components/Header';
import About from './components/About';
import HardFork from './components/HardFork';
import Resources from './components/Resources'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <HardFork />
        <Resources />
        <Footer />
      </div>
    );
  }
}

export default App;
