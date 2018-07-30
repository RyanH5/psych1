import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyAaWWdDg371Q0nEp5rDwpMHkYf-PoLtsjs",
  authDomain: "kevinsadmin.firebaseapp.com",
  databaseURL: "https://kevinsadmin.firebaseio.com",
  projectId: "kevinsadmin",
  storageBucket: "kevinsadmin.appspot.com",
  messagingSenderId: "255768340060"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};