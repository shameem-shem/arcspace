import { boot } from "quasar/wrappers";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlyWOSJu9VXcXqN66SB185k_wPGDB643E",
  authDomain: "arcspace-564ff.firebaseapp.com",
  databaseURL: "https://arcspace-564ff-default-rtdb.firebaseio.com",
  projectId: "arcspace-564ff",
  storageBucket: "arcspace-564ff.appspot.com",
  messagingSenderId: "389597106202",
  appId: "1:389597106202:web:539fdb28cdaf603c8201a3",
  measurementId: "G-R10XQFN1EB",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  })

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
//   firebase, analytics;
// });

export {firebase,analytics};