import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB4Q8lp7GbCfmCCwkXNruw5II8UznznaTg",
    authDomain: "clone-4b68c.firebaseapp.com",
    databaseURL: "https://clone-4b68c.firebaseio.com",
    projectId: "clone-4b68c",
    storageBucket: "clone-4b68c.appspot.com",
    messagingSenderId: "743542268448",
    appId: "1:743542268448:web:01cda9e7bdf5086cdd5245",
    measurementId: "G-S9FNPFSK2Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider();

export  { auth, provider, storage } ;
export default db;