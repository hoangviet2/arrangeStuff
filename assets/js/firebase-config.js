 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 // Import the functions you need from the SDKs you need
 import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
 import { getAuth, onAuthStateChanged ,createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
 import { getFirestore, collection, addDoc,setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js"
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
export var a = '';
 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export async function createUser(email, full_name, last_login,uid){
  const docData = {
    email : email,
    full_name : full_name,
    last_login : last_login
  }
  const docRef = await setDoc(doc(db, "users", uid),docData);
  console.log("oke");
  return "HI";
}

export function getUserName(){
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log(user.displayName);
      return user.displayName;
    } else {
      // User is signed out
      // ...
    }
  });
}

export async function getUserInformation(){
  //const currentUser = getcurrentAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log(user.uid);
      const docRef = doc(db, "users", String(user.uid));
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        console.log("returned");
        let abc = docSnap.data().full_name;
        console.log(abc);
        a = abc;
        return abc;
        //console.log("returned")
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } else {
      // User is signed out
      // ...
    }
  });
}

