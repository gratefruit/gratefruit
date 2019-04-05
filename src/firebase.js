import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "gratefruit-dev.firebaseapp.com",
  databaseURL: "https://gratefruit-dev.firebaseio.com",
  projectId: "gratefruit-dev",
  storageBucket: "gratefruit-dev.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`
};

firebase.initializeApp(config);

export function firebaseErrorResponse(error) {
  switch(error.code) {
    case 'auth/invalid-verification-code':
      return 'Invalid SMS Verification Code'
    default:
      return error.message
  }
}


export default firebase
