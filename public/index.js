
  
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






  

