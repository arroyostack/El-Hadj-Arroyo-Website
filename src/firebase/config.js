import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZFoz9f63vbt4k-P7WoR9b8MK7J4-ME0Q",
    authDomain: "netninja-blog-project.firebaseapp.com",
    projectId: "netninja-blog-project",
    storageBucket: "netninja-blog-project.appspot.com",
    messagingSenderId: "449762082849",
    appId: "1:449762082849:web:6e4c7140176ddf42e12360"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore-service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
