import React, { Component } from 'react';
import Header from '../Header/Header';
import DisplayPage from '../DisplayPage/DisplayPage';
import { Main } from '../Main/Main';
import { Footer } from '../../Components/Footer/Footer';
import { firebase } from '../../firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

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
