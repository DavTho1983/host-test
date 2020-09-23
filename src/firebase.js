import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = firebase.functions.config()
const firebaseConfig = {
	apiKey: config.myconfig.apikey,
    // authDomain: "ammonite-prototype-2dfa7.firebaseapp.com",
    // databaseURL: "https://ammonite-prototype-2dfa7.firebaseio.com",
    projectId: "host-test-4cd54",
    // storageBucket: "static_bucket-2dfa7",
    messagingSenderId: "538348437364",
    appId: "https://host-test-4cd54.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);


export default firebase;
