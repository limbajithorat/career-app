import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCwr1JJS0wtNeHQd_y1M9gcEikCKq3QAdY",
  authDomain: "career-app-dec.firebaseapp.com",
  projectId: "career-app-dec",
  storageBucket: "career-app-dec.appspot.com",
  messagingSenderId: "932305714152",
  appId: "1:932305714152:web:e23ddcd2d7e060b5de025d",
  measurementId: "G-6XM73J9G3X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
