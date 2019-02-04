import React, { Component } from 'react';

import Header from './components/Header';
import About from './components/About';
import HardFork from './components/HardFork';
import Resources from './components/Resources';
import Herders from './components/Herders';
import Footer from './components/Footer';
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
