  // Import the functions you need from the SDKs you need
  
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  
  
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyBD_0oO4vTXUafMKLGujTNHUWutlenBcI8",
    authDomain: "fir-b64cb.firebaseapp.com",
    projectId: "fir-b64cb",
    storageBucket: "fir-b64cb.appspot.com",
    messagingSenderId: "325594035109",
    appId: "1:325594035109:web:7cd98ec12403fa2860ee4c",
    measurementId: "G-W87CSKMQTL"
  };



  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  const create  = () => {

    let email = document.getElementById('email')
    let password = document.getElementById('password');
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
    })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
        console.log(errorCode,errorMessage)
        alert(errorMessage)
  });
  }


export default create