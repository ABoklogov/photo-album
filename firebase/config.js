// import {
//   REACT_APP_FIREBASE_API_KEY,
//   REACT_APP_FIREBASE_AUTH_DOMAIN,
//   REACT_APP_FIREBASE_PROJECT_ID,
//   REACT_APP_FIREBASE_STORAGE_BUCKET,
//   REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   REACT_APP_FIREBASE_APP_ID,
//   REACT_APP_FIREBASE_MEASUREMENT_ID
// } from "@env";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyCgtg4Dn9sF_TnCIoxz-wjbwGKJWpAENnM',
  authDomain: 'photo-album-5ed4a.firebaseapp.com',
  projectId: 'photo-album-5ed4a',
  storageBucket: 'photo-album-5ed4a.appspot.com',
  messagingSenderId: '455365733172',
  appId: '1:455365733172:web:0639356bb84d94f0275361',
  measurementId: 'G-85892M5VVT'
};
// const firebaseConfig = {
//   apiKey: REACT_APP_FIREBASE_API_KEY,
//   authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: REACT_APP_FIREBASE_APP_ID,
//   measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);