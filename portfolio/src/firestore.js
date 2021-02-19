// import admin from 'firebase-admin';

// import serviceAccount from './../src/portfolio-bee-92-firebase-adminsdk-pgdyr-4a8592976a.json';


// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCzNhotbWTJwV1rXSis_lx1YmAcDCO2FuQ",
  authDomain: "portfolio-bee-92.firebaseapp.com",
  projectId: "portfolio-bee-92",
  storageBucket: "portfolio-bee-92.appspot.com",
  messagingSenderId: "120014098964",
  appId: "1:120014098964:web:9b87ad9d99208e729b8d01"
};
const firebaseDB = firebase.initializeApp(config);
export default firebaseDB;