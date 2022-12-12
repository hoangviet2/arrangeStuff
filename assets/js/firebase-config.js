 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 // Import the functions you need from the SDKs you need
 import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
 import { getAuth, onAuthStateChanged ,createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
 import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js"
 import { getDatabase, ref, set, child, push, update, get,onValue } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js"
 //const { validate } = require('email-validator');
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyAxPdCCMub3xuVncOxQOka8qhPiQIU7Jf8",
  authDomain: "arrangestuff.firebaseapp.com",
  projectId: "arrangestuff",
  storageBucket: "arrangestuff.appspot.com",
  messagingSenderId: "126789076958",
  appId: "1:126789076958:web:ad27c3c1bb2bbab9af3f4f",
  measurementId: "G-38NCXJNFHR",
  databaseURL: "https://arrangestuff-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

export function getName(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //User is signed in, see docs for a list of available properties
      //https://firebase.google.com/docs/reference/js/firebase.User
      //console.log(uid);
      get(child(ref(db), `users/${user.uid}`)).then(async (snapshot) => {
        if (snapshot.exists()) {
          console.log(10);
          //return snapshot.val.
          console.log(snapshot.val());
          var name = snapshot.val().full_name;
          return name;
          _calback();
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      
    } else {
      // User is signed out
      // ...
      console.log("Djt con mje m");
    }
  });
}

