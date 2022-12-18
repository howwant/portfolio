import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlG4ufxW-p1RQefHI8PTn0NSNlqsd2flA",
    authDomain: "portfolio-899c2.firebaseapp.com",
    projectId: "portfolio-899c2",
    storageBucket: "portfolio-899c2.appspot.com",
    messagingSenderId: "104072962938",
    appId: "1:104072962938:web:aa044804118b2c6ba36cc3"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();