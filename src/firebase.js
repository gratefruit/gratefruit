import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyCV51dhVcYg98eRxH-CbzzMquzwq8RbdRM",
  authDomain: "gratefruit-dev.firebaseapp.com",
  databaseURL: "https://gratefruit-dev.firebaseio.com",
  projectId: "gratefruit-dev",
  storageBucket: "gratefruit-dev.appspot.com",
  messagingSenderId: "934223996351"
};

const app = firebase.initializeApp(config);


export default app
