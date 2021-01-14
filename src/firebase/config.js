import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
const API_KEY = process.env.REACT_APP_API_KEY;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "imagegram-92765.firebaseapp.com",
  projectId: "imagegram-92765",
  storageBucket: "imagegram-92765.appspot.com",
  messagingSenderId: "670602284638",
  appId: "1:670602284638:web:6537cd59a8aefb2d566ecf",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
