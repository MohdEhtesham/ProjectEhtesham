// import * as firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';
// var firebaseConfig = {
//     apiKey: "AIzaSyBmKIqenEtr0QZKPgWqNPp_eKk70yek1og",
//     authDomain: "project-b9719.firebaseapp.com",
//     projectId: "project-b9719",
//     storageBucket: "project-b9719.appspot.com",
//     messagingSenderId: "264123974030",
//     appId: "1:264123974030:web:7f9d1cf7cf19167f1b24df",
//     measurementId: "G-CZ88QG62KS"
// };
// let app;
// if (firebase.apps.length === 0) {
// app = firebase.initializeApp(firebaseConfig);
// } else {
// app = firebase.app();
// }
// const db = app.firestore();
// const auth = firebase.auth();
// export { db, auth };

import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmKIqenEtr0QZKPgWqNPp_eKk70yek1og",
        authDomain: "project-b9719.firebaseapp.com",
        projectId: "project-b9719",
        storageBucket: "project-b9719.appspot.com",
        messagingSenderId: "264123974030",
        appId: "1:264123974030:web:7f9d1cf7cf19167f1b24df",
        measurementId: "G-CZ88QG62KS"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true}, );

export { db, auth };