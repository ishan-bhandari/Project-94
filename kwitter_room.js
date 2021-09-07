
const firebaseConfig = {
      apiKey: "AIzaSyBqoXb2tfkZXDxXuV3mBKoBXSwt3Up3KXY",
      authDomain: "classtest-cd845.firebaseapp.com",
      projectId: "classtest-cd845",
      storageBucket: "classtest-cd845.appspot.com",
      messagingSenderId: "347320330872",
      appId: "1:347320330872:web:a3a1740939733ab2e69b8d"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
userName = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + userName + "!";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
