import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB9qucoduU-U8o9OgJSdzL9Gg3FwH-uHV4',
  authDomain: 'delirium-screening.firebaseapp.com',
  projectId: 'delirium-screening',
  storageBucket: 'delirium-screening.appspot.com',
  messagingSenderId: '511555899286',
  appId: '1:511555899286:web:559b7c1dee456d7a1e57b7',
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export default firebase;
