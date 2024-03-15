import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyCerZRanLIcdZj3qYh6Z9ik2LVfZnWSnTw",
    authDomain: "hichat-552a0.firebaseapp.com",
    projectId: "hichat-552a0",
    storageBucket: "hichat-552a0.appspot.com",
    messagingSenderId: "733874260116",
    appId: "1:733874260116:web:601ecc2a98ab037d6a4c81"
}).auth();