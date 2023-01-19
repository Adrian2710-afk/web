var firebaseConfig = {
    apiKey: "AIzaSyB7K1N5M1yqVPvsh2A4ee5UxQLRsDykjak",
    authDomain: "nosequeponerxd-59a13.firebaseapp.com",
    databaseURL: "https://nosequeponerxd-59a13-default-rtdb.firebaseio.com",
    projectId: "nosequeponerxd-59a13",
    storageBucket: "nosequeponerxd-59a13.appspot.com",
    messagingSenderId: "1019282873820",
    appId: "1:1019282873820:web:995abdab4660507441c319",
    measurementId: "G-7H45PZ6WP8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+ user_name + " Esperamos que te puedas divertir con tus amigos";