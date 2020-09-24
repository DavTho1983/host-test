import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_TOKEN,
    // authDomain: "ammonite-prototype-2dfa7.firebaseapp.com",
    // databaseURL: "https://ammonite-prototype-2dfa7.firebaseio.com",
    projectId: "host-test-dev",
    // storageBucket: "static_bucket-2dfa7",
    messagingSenderId: "474261117721",
    appId: "https://host-test-dev.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);


export default firebase;
