import firebase from 'firebase/app'
import 'firebase/firestore'

// importar api key
const firebaseConfig = {
    apiKey: "AIzaSyBIm7gfcVEghTGq1pXni5v2qq8lmCExQG0",
    authDomain: "mi-crud-5a6b8.firebaseapp.com",
    databaseURL: "https://mi-crud-5a6b8.firebaseio.com",
    projectId: "mi-crud-5a6b8",
    storageBucket: "mi-crud-5a6b8.appspot.com",
    messagingSenderId: "171980873964",
    appId: "1:171980873964:web:19e312dd8d427467de05c9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// uso de base de datos
  const db = firebase.firestore()

// exportacion de db 
  export {db}