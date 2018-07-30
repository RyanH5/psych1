import React, { Component } from 'react';
import Header from '../Header/Header';
import DisplayPage from '../DisplayPage/DisplayPage';
import { Main } from '../Main/Main';
import { Footer } from '../../Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
