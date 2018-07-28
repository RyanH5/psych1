import Rebase from 're-base'
import firebae from 'firebase';

const config = {
  apiKey: "AIzaSyAaWWdDg371Q0nEp5rDwpMHkYf-PoLtsjs",
  authDomain: "kevinsadmin.firebaseapp.com",
  databaseURL: "https://kevinsadmin.firebaseio.com",
  projectId: "kevinsadmin",
  storageBucket: "kevinsadmin.appspot.com",
  messagingSenderId: "255768340060"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base }