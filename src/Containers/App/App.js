import Header from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../../Components/Footer/Footer';
import React, { Component } from 'react';
import { config, db } from '../../firebase/firebase';
import firebase from 'firebase';


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.app = firebase.initializeApp(config);
    this.database = db.ref().child('speed')
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
          <h1>HEY DUDE Speed of {this.state.speed}</h1>
          <h1>HEY DUDE Speed of {this.state.speed}</h1>
          <h1>HEY DUDE Speed of {this.state.speed}</h1>
          <h1>HEY DUDE Speed of {this.state.speed}</h1>
          <h1>HEY DUDE Speed of {this.state.speed}</h1>
          <h1>HEY DUDE Speed of {this.state.speed}</h1>

          <h1>HEY DUDE Speed of {this.state.speed}</h1>
          <h1>HEY DUDE Speed of {this.state.speed}</h1><h1>HEY DUDE Speed of {this.state.speed}</h1>
          <h1>HEY DUDE Speed of {this.state.speed}</h1>
          
          <Footer />  
      </div>
    )
  }
}

export default App;

