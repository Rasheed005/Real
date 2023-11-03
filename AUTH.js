
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getDatabase , set, ref, update } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
  import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js;

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


  


	modal-btn.addEventListener('click', (e) => {

         var  email= document.getElementById ('email').value; 
         var passwerd = document.getElementById ('password').value; 



        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
              const user = userCredential.user;


            const dt= new Date () ;
            update(ref(database, 'users/' + users.uid ), {

            last_login: dt, 
            
    });
      alert('user logged in') ;
    // ...
  });
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert('errorMessage');
    });

});


</script>