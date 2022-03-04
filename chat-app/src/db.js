import { initializeApp } from "firebase/app"
import "firebase/database"

const config = {
    // API KEYS
    apiKey: "AIzaSyDJWY3ZP_z5BWSGhXGlu08fu3rGWxe1Z8c",
    authDomain: "chatapp-95eea.firebaseapp.com",
    projectId: "chatapp-95eea",
    storageBucket: "chatapp-95eea.appspot.com",
    messagingSenderId: "64501475060",
    appId: "1:64501475060:web:9656d5dd13045166d960a1"
}

const db = initializeApp(config);
export default db;