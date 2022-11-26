import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
  apiKey: "AIzaSyCucyI_u_FnXiMfwGWczZ2BtFA4yziZ2H8",
  authDomain: "unichat-app-46432.firebaseapp.com",
  projectId: "unichat-app-46432",
  storageBucket: "unichat-app-46432.appspot.com",
  messagingSenderId: "170619801395",
  appId: "1:170619801395:web:0cc8b10244fbb3fda9b846",
}).auth();
