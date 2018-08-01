import Header from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../../Components/Footer/Footer';
import React, { Component } from 'react';
import { config, db, app } from '../../firebase/firebase';
import firebase from 'firebase';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.database = app.database().ref().child('speed')
    this.state = {
      speed: 10
    }
  }

  componentDidMount() {
    this.database.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    })
  }


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

