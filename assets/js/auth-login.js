import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 // Import the functions you need from the SDKs you need
 import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
 import { getAuth, onAuthStateChanged ,createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
 import { getFirestore, collection, addDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js"
 import { getDatabase, ref, set, child, push, update, get,onValue } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js"
 import { createUser } from "./firebase-config.js";
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
const db = getFirestore(app);

let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");
let signUpButons = document.getElementById("signUp");
let signInButons = document.getElementById("signIn");
let getButtons = (e) => e.preventDefault();
// 
let changeForm = (e) => {
	switchCtn.classList.add("is-gx");
	setTimeout(function () {
		switchCtn.classList.remove("is-gx");
	}, 1500);

	switchCtn.classList.toggle("is-txr");
	switchCircle[0].classList.toggle("is-txr");
	switchCircle[1].classList.toggle("is-txr");

	switchC1.classList.toggle("is-hidden");
	switchC2.classList.toggle("is-hidden");
	aContainer.classList.toggle("is-txl");
	bContainer.classList.toggle("is-txl");
	bContainer.classList.toggle("is-z200");
};

let mainF = (e) => {
	for (var i = 0; i < allButtons.length; i++)
		allButtons[i].addEventListener("click", getButtons);
	for (var i = 0; i < switchBtn.length; i++)
		switchBtn[i].addEventListener("click", changeForm);
};
signInButons.addEventListener("click",login);
signUpButons.addEventListener("click",register);
window.addEventListener("load", mainF);
  // Set up our register function
async function upload(email,full_name,Date,UID){
	let result = await createUser(email,full_name,Date,UID,0,0,0);
	return new Promise(resolve => setTimeout(resolve,5000,result));
}

async function put(email,full_name,Date,UID){
	const data = await upload(email,full_name,Date,UID);
	window.location.href = "index.html";
	//idiot.innerHTML = data.full_name;
}

async function register () {
	// Get all our input fields
	let email = document.getElementById("email_signup").value;
	let password = document.getElementById('password_signup').value;
	let full_name = document.getElementById('name_signup').value;
  
	// Validate input fields
	// validate_email(email) == false || 
	if (validate_password(password) == false) {
	  alert('Email or Password is Outta Line!!');
	  return
	  // Don't continue running the code
	}
	if (validate_field(full_name) == false) {
	  alert('One or More Extra Fields is Outta Line!!');
	  return
	}

	// var x = async() => {
	// 	return new Promise(resolve => setTimeout(resolve,5000,data));
	// 	console.log(cred);
	// 	alert("Created User");
	
	// }
	// Move on with Auth
	var UID = '';
	createUserWithEmailAndPassword(auth, email, password)
	.then(cred => {
	  //Declare user variable
	  var  user =  auth.currentUser;
		//Add this user to Firebase Database
		
	  // Create User data
	  var user_data = {
		email : email,
		full_name : full_name,
		last_login : Date.now()
	  }
	  //const x = await upload(email,full_name,Date.now(),string(user.uid));

	  put(email,full_name,Date.now(),String(user.uid));
	  // Push to Firebase Database
	  //database_ref.collection("users").doc(user.uid).set(user_data);
	  //set(ref(db,"users/"+user.uid),user_data);
	  //database_ref.child('users/' + user.uid).set(user_data)
	  
	})
	.catch((error) => {
	  // Firebase will use this to alert of its errors
	  var error_code = error.code;
	  var error_message = error.message;
  
	  alert(error_message);
	});
  }
  
  // Set up our login function
function login () {
	// Get all our input fields
	let email = document.getElementById('email_signin').value;
	let password = document.getElementById('password_signin').value;
  
	// Validate input fields
	// validate_email(email) == false || 
	if (validate_password(password) == false) {
	  alert('Email or Password is Outta Line!!');
	  return
	  // Don't continue running the code
	}
  
	signInWithEmailAndPassword(auth ,email, password)
	.then((userCredential) => {
	  window.location.href = "index.html";
	  // DOne
	  alert('User Logged In!!');
		
	})
	.catch((error) => {
	  // Firebase will use this to alert of its errors
	  var error_code = error.code;
	  var error_message = error.message;
  
	  alert(error_message);
	})
  }
  
  
  
  
  // Validate Functions
// function validate_email(email) {
// 	expression = "/^[^@]+@\w+(\.\w+)+\w$/";
// 	if (expression.test(email) == true) {
// 	  // Email is good
// 	  return true
// 	} else {
// 	  // Email is not good
// 	  return false
// 	}
// }
  
function validate_password(password) {
	// Firebase only accepts lengths greater than 6
	if (password < 6) {
	  return false
	} else {
	  return true
	}
}
  
function validate_field(field) {
	if (field == null) {
	  return false
	}
  
	if (field.length <= 0) {
	  return false
	} else {
	  return true
	}
}