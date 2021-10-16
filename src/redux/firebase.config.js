import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC3qOOxmDfdBBNwA4yh5jQevYsrPa_Z_Co",
    authDomain: "my-login-redux.firebaseapp.com",
    projectId: "my-login-redux",
    storageBucket: "my-login-redux.appspot.com",
    messagingSenderId: "406566484127",
    appId: "1:406566484127:web:009f29981246a6d17d0aaa"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { googleProvider, db, firebase };