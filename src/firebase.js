import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB6wzHzih_gygG1LXb-SOipZi_nx-ZN6lU",
    authDomain: "drive-clone-15c3b.firebaseapp.com",
    projectId: "drive-clone-15c3b",
    storageBucket: "drive-clone-15c3b.appspot.com",
    messagingSenderId: "879243823741",
    appId: "1:879243823741:web:8c2e143db0ca9ee0d3ff14"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export{auth , provider,  db , storage}