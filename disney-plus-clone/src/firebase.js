import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyChVW80HqnhC7lpmp68Bkd6Yn3Rqk-a9vI",
  authDomain: "disneyplus-clone-8265c.firebaseapp.com",
  projectId: "disneyplus-clone-8265c",
  storageBucket: "disneyplus-clone-8265c.appspot.com",
  messagingSenderId: "686833778225",
  appId: "1:686833778225:web:f438f305899be5d95e5f10",
  measurementId: "G-WJX0JYY5SM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

