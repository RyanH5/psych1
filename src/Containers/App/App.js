import Header from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../../Components/Footer/Footer';
import React, { Component } from 'react';
import { config, db, app } from '../../firebase/firebase';
import firebase from 'firebase';


class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />  
      </div>
    )
  }
}

export default App;

