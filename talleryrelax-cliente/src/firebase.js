// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtaJA4oRhEFP0dccMyTI1NjTQIqZLNPQY",
  authDomain: "talleryrelax.firebaseapp.com",
  projectId: "talleryrelax",
  storageBucket: "talleryrelax.appspot.com",
  messagingSenderId: "1074174113267",
  appId: "1:1074174113267:web:8929324ece61b53e5a8e86",
  measurementId: "G-X6G3S8P5EW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
//auth.languageCode='es';
export default firebaseApp;

console.log(auth);

const provider = new GoogleAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const signInWithGoogle = () => signInWithRedirect(auth, provider);
