import Header from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../../Components/Footer/Footer';
import React from 'react';
import { Route } from 'react-router-dom';
// import Navigation from './Navigation';
// import LandingPage from './Landing';
import SignUpPage from '../../Components/SignUp/SignUp';
import SignInPage from '../../Components/SignIn/SignIn';
import HomePage from '../../Components/Home/Home';
// import AccountPage from '../../Components';

import * as routes from '../../constants/routes';

// <Route exact path={routes.LANDING} component={() => <LandingPage />} />
// <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />


// <Navigation />
const App = () =>
    <div>
        <Header />
        <Main />
        <Footer />  
      <Route exact path={routes.HOME} component={() => <HomePage />} />
    </div>

export default App;



// import React, { Component } from 'react';
// import { firebase } from '../../firebase';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       authUser: null,
//     };
//   }

//   componentDidMount() {
//     firebase.auth.onAuthStateChanged(authUser => {
//       authUser
//         ? this.setState({ authUser })
//         : this.setState({ authUser: null });
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;
