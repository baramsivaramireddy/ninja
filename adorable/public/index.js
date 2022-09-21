 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyD5GXDIK-7Z8D_VbpBPEdrBTIwP7sOporo",
   authDomain: "adorable-83a70.firebaseapp.com",
   projectId: "adorable-83a70",
   storageBucket: "adorable-83a70.appspot.com",
   messagingSenderId: "956522872475",
   appId: "1:956522872475:web:b09187773ef193be3e903e",
   measurementId: "G-B5K3TVT0B5"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);