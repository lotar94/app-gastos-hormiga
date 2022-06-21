// Import the functions you need from the SDKs you need
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// v9 compat packages are API compatible with v8 code

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {apiKey,authDomain, projectId,storageBucket,messagingSenderId,appId} from '@env'

let CURRENT_USER_ID = null

export const setCurrentUserId = (userId) => {
  CURRENT_USER_ID = userId;
}

export const getCurrentUserId = () => {
  return CURRENT_USER_ID
}
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



export default {
  firebase,
  db,
  app 
}