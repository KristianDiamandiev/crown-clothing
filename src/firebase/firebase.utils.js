import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-2ddEHGAPbrlkhEcgw5Avq8sYrtqdmY4",
  authDomain: "crown-db-40454.firebaseapp.com",
  databaseURL: "https://crown-db-40454.firebaseio.com",
  projectId: "crown-db-40454",
  storageBucket: "crown-db-40454.appspot.com",
  messagingSenderId: "183880862824",
  appId: "1:183880862824:web:03615a3c3cc5262b003fdd",
  measurementId: "G-W7745Z9951",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
