import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAdeZ08KDQ8O8hSC9Xnm148EMj0I3j-Yjw",
  authDomain: "trello-clone-15fdb.firebaseapp.com",
  databaseURL: "https://trello-clone-15fdb-default-rtdb.firebaseio.com",
  projectId: "trello-clone-15fdb",
  storageBucket: "trello-clone-15fdb.appspot.com",
  messagingSenderId: "314896413068",
  appId: "1:314896413068:web:207623cf915f699b5226a9"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database