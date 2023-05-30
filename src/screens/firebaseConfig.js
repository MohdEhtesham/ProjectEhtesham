import * as firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmKIqenEtr0QZKPgWqNPp_eKk70yek1og",
    authDomain: "project-b9719.firebaseapp.com",
    projectId: "project-b9719",
    storageBucket: "project-b9719.appspot.com",
    messagingSenderId: "264123974030",
    appId: "1:264123974030:web:7f9d1cf7cf19167f1b24df",
    measurementId: "G-CZ88QG62KS"
};

firebase.initializeApp(firebaseConfig);

export default firebase;