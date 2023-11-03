// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const firebaseConfig = {
//     apiKey: "AIzaSyA8mVjTUGf3JmjyR8T3tcBGYd9Ut3Wc1PI",
//     authDomain: "myqrweb-fb8be.firebaseapp.com",
//     databaseURL: "https://myqrweb-fb8be-default-rtdb.firebaseio.com",
//     projectId: "myqrweb-fb8be",
//     storageBucket: "myqrweb-fb8be.appspot.com",
//     messagingSenderId: "646537898259",
//     appId: "1:646537898259:web:1b5682f1faed077260d2e6",
//     measurementId: "G-60X7FKTD8N"
    
//   };

var firebaseConfig = {
    apiKey: "AIzaSyBSWNcLGMg6JZ8InxT0CoJcjf3j_8qDnSc",
    authDomain: "fpi-question-bank.firebaseapp.com",
    databaseURL: "https://fpi-question-bank-default-rtdb.firebaseio.com",
    projectId: "fpi-question-bank",
    storageBucket: "fpi-question-bank.appspot.com",
    messagingSenderId: "170348600881",
    appId: "1:170348600881:web:a4203ba03db578c5863f10"
  };

//initialize firebase
firebase.initializeApp(firebaseConfig);
//reference messages collection
// var messagesRef=firebase.database().ref ('messages');
var myloveDB= firebase.database().ref('mylove');

// listen for form submit
document.getElementById("mylove").addEventListener("submit",submitForm);
//submit form
function submitForm(e){
    e.preventDefault();

    // get values 
    var name=getInputVal("name");
    var name=getInputVal("fname");
    var file=getInputVal("file");
    var department=getInputVal("department");
    var number=getInputVal("number");
    var email=getInputVal("email");
    var sex=getInputVal("sex");
    var device=getInputVal("device");
    var MAC=getInputVal("MAC");
    

    console.log(name,fname,file,department,number,email,sex,device,MAC);

    //save message
    saveMessages= (name,fname,file,department,number,email,sex,device,MAC);

    //show alert
    document.querySelector('.alert').style.display='block';

    //hide alert after 3 seconds 
    setTimeout (() => {
        document.querySelector('.alert').style.display='none';
    },3000);

    //clear form
    document.getElementById('mylove').reset();
}
//to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
} 
//save message to firebase
var saveMessages= (name,fname,file,department,number,email,sex,device,MAC) =>{
    var newmylove= myloveDB.push();

        newmylove.set ({
        name:name,
        fname:fname,
        file:file, 
        department:department,
        number:number,
        email:email,
        sex:sex,
        device:device,
        MAC:MAC, 

    });

};
    var getElementVal = (id) => {
    return document.getElementById(id).value;
  };
