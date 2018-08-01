import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { config } from '../../src/config';

const app = firebase.initializeApp(config)
const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
  app
};