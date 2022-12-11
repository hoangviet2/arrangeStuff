 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
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
   measurementId: "G-38NCXJNFHR"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const analytics = getAnalytics(app);