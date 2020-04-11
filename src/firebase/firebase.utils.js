import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA4U4d0XbKti4MmgHS5xWP9KSd9jNj6k9Q",
  authDomain: "clothing-try-project.firebaseapp.com",
  databaseURL: "https://clothing-try-project.firebaseio.com",
  projectId: "clothing-try-project",
  storageBucket: "clothing-try-project.appspot.com",
  messagingSenderId: "656497570133",
  appId: "1:656497570133:web:7253f49b082bbb96d63fdc",
  measurementId: "G-Q87BG55VNK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
