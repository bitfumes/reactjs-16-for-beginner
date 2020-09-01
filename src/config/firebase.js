import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCFx6G_j_sJTWJWkOKVNvwd0ZiNtqpkqMY",
  authDomain: "in-depth-react-1.firebaseapp.com",
  databaseURL: "https://in-depth-react-1.firebaseio.com",
  projectId: "in-depth-react-1",
  storageBucket: "in-depth-react-1.appspot.com",
  messagingSenderId: "931473537546",
  appId: "1:931473537546:web:b17ceda1196406af1ffdf3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
