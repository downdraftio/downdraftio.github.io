// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
// Import the Auth module
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBorjkRcHYi7TLzxJf8NTIo64K4raItt6k",
  authDomain: "downdraftio-91c18.firebaseapp.com",
  projectId: "downdraftio-91c18",
  storageBucket: "downdraftio-91c18.appspot.com",
  messagingSenderId: "1022580051781",
  appId: "1:1022580051781:web:56b6a2d7a27a19bdb4b82c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function signin() { 
 // Initialize the Auth object
 const auth = getAuth(app);
 // Create a new user with email and password
 signInWithEmailAndPassword(auth, "dallasszittai@outlook.com", passwordresponse)
 .then((userCredential) => {
   // Signed in 
   const user = userCredential.user;
   console.log("200");
   sessionStorage.setItem("token", "qeklrj23klj2389s");
   swal.fire({
    title: "Access Granted",
    icon: "success",
    timer: "2000", 
   });
   document.title = "Access Granted";
   document.getElementById("accessgranted").play(); 
   setTimeout(()=>{document.querySelector(".eye").style.animation = "init 3s forwards";},2000) 
   setTimeout(()=>{location.replace("https://downdraftio.github.io")},4000); 
   // ...
 })
 .catch((error) => {
   swal.fire({
    title: "Access Denied😭",
    text: "The password you entered was not recongized by the server",
    icon: "error",
    color: "white",
   });
   setTimeout(()=>{location.reload();},2000); 
 });

}; 

let passwordresponse; 

let initialization = {
    eye: document.querySelector(".eye"), 
    preinit() {
        console.log(this.eye);
        this.eye.style.animation = "preinit 2s forwards"; 
        setTimeout(()=>{
        swal.fire({
        title: "Enter the password...",
        input: "password",
        icon: "info",
        allowOutsideClick: false,
        allowEscapeKey: false, 
        }).then((result)=> {
            passwordresponse = result.value; 
            signin(); 
        })}, 2000); 
    },

    init() { 
        
    }
}


initialization.preinit(); 
