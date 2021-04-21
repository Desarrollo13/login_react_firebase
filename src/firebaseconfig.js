import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJMTLXRPTIsa7W5S0ZE7VYyclI0gWq6k0",
  authDomain: "login-react-76a83.firebaseapp.com",
  projectId: "login-react-76a83",
  storageBucket: "login-react-76a83.appspot.com",
  messagingSenderId: "112059722688",
  appId: "1:112059722688:web:5e1e3275ee49e5fc3cb625",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
export { auth };
