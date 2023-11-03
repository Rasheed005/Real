Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseConfig = {
    apiKey: "AIzaSyA8mVjTUGf3JmjyR8T3tcBGYd9Ut3Wc1PI",
    authDomain: "myqrweb-fb8be.firebaseapp.com",
    databaseURL: "https://myqrweb-fb8be-default-rtdb.firebaseio.com",
    projectId: "myqrweb-fb8be",
    storageBucket: "myqrweb-fb8be.appspot.com",
    messagingSenderId: "646537898259",
    appId: "1:646537898259:web:1b5682f1faed077260d2e6",
    measurementId: "G-60X7FKTD8N"
    
  };






<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getDatabase , set, ref, update } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js;

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA8mVjTUGf3JmjyR8T3tcBGYd9Ut3Wc1PI",
    authDomain: "myqrweb-fb8be.firebaseapp.com",
    databaseURL: "https://myqrweb-fb8be-default-rtdb.firebaseio.com",
    projectId: "myqrweb-fb8be",
    storageBucket: "myqrweb-fb8be.appspot.com",
    messagingSenderId: "646537898259",
    appId: "1:646537898259:web:996c5923fd58d3bc60d2e6",
    measurementId: "G-ETGMNPGZBT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();


  Signup.addEventListener('click', (e)=> {

    var email= document.getElementById ('email').value; 
    var email= document.getElementById ('').value; 
    var email= document.getElementById ('').value; 


   const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;


    set(ref(database, 'users/' + users.uid ), {

	email:email ;
	email:email  
  });
    alert('User Created!')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..

  alert('errorMessage');
  });
  

});


	Login.addEventListener('click', (e)=> {

         var email= document.getElementById ('email').value; 
         var username = document.getElementById ('').value; 



	signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;


       const dt= new Date () ;
     Update(ref(database, 'users/' + users.uid ), {

	Last_login: dt, 
	 
  });
      alert('user loged in') ;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

     alert('errorMessage');
  });

});
</script>