import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDGQiKDr0eXDDElW1HKDI6hW9lL_Ku4v5c",
    authDomain: "menuejecicios.firebaseapp.com",
    projectId: "menuejecicios",
    storageBucket: "menuejecicios.appspot.com",
    messagingSenderId: "772507507961",
    appId: "1:772507507961:web:cf433ecd39151928fbd628"
  };
  
  //Initialize firebase
  firebase.initializeApp(firebaseConfig);

  export  {firebase};

   