//YOUR FIREBASE LINKS
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

///////////
user_name = localStorage.getItem("user");
room_name = localStorage.getItem("ClickRoom");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
 
names =  message_data['name'];
messages =  message_data['message'];
console.log(names + messages);

names_tag = "<h4>" + names + "<img src='tick.png' class = 'user_tick'> </h4>";
messages_tag = "<h4>" + messages + "</h4>";
row = names_tag + messages_tag ;
document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

function logout (){
    localStorage.removeItem("Room_name");
    localStorage.removeItem("user");
    
    window.location = "index.html";
}

function send () {
  getValue = document.getElementById("textbox").value;
    console.log(getValue);
    firebase.database().ref(room_name).push({
        name:user_name,
        message:getValue
    });
}