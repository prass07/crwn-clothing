import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6f0dXpOI7wq1D9KjzNB3IqU8mB8Ih3gI",
    authDomain: "crwn-clothing-fb.firebaseapp.com",
    databaseURL: "https://crwn-clothing-fb.firebaseio.com",
    projectId: "crwn-clothing-fb",
    storageBucket: "crwn-clothing-fb.appspot.com",
    messagingSenderId: "200804283077",
    appId: "1:200804283077:web:4a5982ec64a5501c7d36ac",
    measurementId: "G-T0RZ242XCT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;