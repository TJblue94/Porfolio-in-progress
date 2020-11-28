import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import currentData from './CurrentData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header currentData={currentData}/>
        <About currentData={currentData}/>
        <Portfolio currentData={currentData}/>
        <Footer currentData={currentData}/>
      </div>
    );
  }
}

export default App;