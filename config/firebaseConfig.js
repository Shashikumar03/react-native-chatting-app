// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA4uapkxV4EC6zQ8Qg2Q8XThcwwAbdRGc",
  authDomain: "reactnative-chhat.firebaseapp.com",
  projectId: "reactnative-chhat",
  storageBucket: "reactnative-chhat.appspot.com",
  messagingSenderId: "20292474137",
  appId: "1:20292474137:web:21bca98efd7aad4a946188",
  measurementId: "G-HG1NSCL741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db=ge tFirestore(app)
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInAnonymously };







// // firebase.js
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth, signInAnonymously } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth, signInAnonymously };
