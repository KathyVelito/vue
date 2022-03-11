import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB0ZX23yWChY2rs8zTGSWHfRAAqgEcPXFY",
    authDomain: "eccomerce-64951.firebaseapp.com",
    projectId: "eccomerce-64951",
    storageBucket: "eccomerce-64951.appspot.com",
    messagingSenderId: "756826045496",
    appId: "1:756826045496:web:3f37882c27635af5ae7acd"
  };

  firebase.initializeApp(firebaseConfig)
   
  const auth = firebase.auth()

  export {
      auth
  }