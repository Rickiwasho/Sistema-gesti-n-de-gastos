// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA_rrcdPUPqT6AIowSocW-3U7FGgviWzB4",
    authDomain: "ssgastos1234.firebaseapp.com",
    projectId: "ssgastos1234",
    storageBucket: "ssgastos1234.appspot.com",
    messagingSenderId: "425621414527",
    appId: "1:425621414527:web:8bb6ea4cd4d236c1e3954a",
    measurementId: "G-6CCMCHF1RX"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };