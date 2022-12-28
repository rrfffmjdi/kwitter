
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBELlwyDxpqtonBmxhHiqy1u0vagCNVvqU",
    authDomain: "kwitter-e7734.firebaseapp.com",
    databaseURL: "https://kwitter-e7734-default-rtdb.firebaseio.com",
    projectId: "kwitter-e7734",
    storageBucket: "kwitter-e7734.appspot.com",
    messagingSenderId: "1049182426288",
    appId: "1:1049182426288:web:4300b223c16ac797121775",
    measurementId: "G-1ZTL8MFRHX"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
      //Start code
row="<div class ='room_name' id="+ Room_names +" onclick='Open_room(this.id);'>#" + Room_names + " </div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function Open_room (name){
localStorage.setItem("ClickRoom" , name);
window.location="kwitter_page.html"; 
}


var userName = localStorage.getItem("user");
console.log(userName);
document.getElementById("welcome").innerHTML = "Welcome " + userName;

function addRoom () {
   var addRoomName = document.getElementById("ipn2").value;
   console.log(addRoomName);
   firebase.database().ref("/").child(addRoomName).update({
    purpose : "adding room name"
   });
    localStorage.setItem("Room_name",addRoomName);
}

function logout (){
      localStorage.removeItem("Room_name");
      localStorage.removeItem("user");

      window.location = "index.html";
}

