import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDGSFBa67BJPkrHCW3Kfv6a_AKEFqtP5A",
  authDomain: "nytimes-29c49.firebaseapp.com",
  databaseURL: "https://nytimes-29c49.firebaseio.com",
  projectId: "nytimes-29c49",
  storageBucket: "nytimes-29c49.appspot.com",
  messagingSenderId: "79609334105",
  appId: "1:79609334105:web:98bf0b5fed22c9970b6448",
  measurementId: "G-L0S5MHBT7Q",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
