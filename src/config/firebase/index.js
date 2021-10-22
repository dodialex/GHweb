import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcXk_GG6WIbQ-A1-x2cYtQ1fENWL8wavE",
    authDomain: "ghweb-a3148.firebaseapp.com",
    databaseURL: "https://ghweb-a3148-default-rtdb.firebaseio.com",
    projectId: "ghweb-a3148",
    storageBucket: "ghweb-a3148.appspot.com",
    messagingSenderId: "414021555612",
    appId: "1:414021555612:web:fe23f1a32f0e03ad34e459"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;