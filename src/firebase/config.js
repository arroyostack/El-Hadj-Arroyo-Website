import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCUADvAE8BSInfQqkp6lci1jA8CURwK6D4",
  
    authDomain: "el-hadj-arroyo-portfolio-1dc18.firebaseapp.com",
  
    projectId: "el-hadj-arroyo-portfolio-1dc18",
  
    storageBucket: "el-hadj-arroyo-portfolio-1dc18.appspot.com",
  
    messagingSenderId: "842786980559",
  
    appId: "1:842786980559:web:c6b7d3922ac33d309cedba"
  
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore-service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
