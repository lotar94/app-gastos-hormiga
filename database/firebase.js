// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// v9 compat packages are API compatible with v8 code

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz9gMpqXOwXyEtscvYMe7GNn8VaWDOq1g",
  authDomain: "app-gastos-homirga.firebaseapp.com",
  projectId: "app-gastos-homirga",
  storageBucket: "app-gastos-homirga.appspot.com",
  messagingSenderId: "407026696746",
  appId: "1:407026696746:web:ca7a7cd2fe5e34638c7953"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
}