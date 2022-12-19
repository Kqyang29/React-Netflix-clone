import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOkPyAvBkcPYWFWi7zZtf6D08Br-um6JE",
  authDomain: "login-app-f6992.firebaseapp.com",
  projectId: "login-app-f6992",
  storageBucket: "login-app-f6992.appspot.com",
  messagingSenderId: "169557409725",
  appId: "1:169557409725:web:2276b1d9643a791dafdcd4"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };