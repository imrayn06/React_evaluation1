import { initializeApp } from 'firebase/app' 
import { getFirestore } from 'firebase/firestore' 


const firebaseConfig = {
    apiKey: "AIzaSyAtIfiSnb1h9IasG7CpCywwhHDyCvvrgrs",
    authDomain: "app-demo-e5a45.firebaseapp.com",
    databaseURL: "https://app-demo-e5a45-default-rtdb.firebaseio.com/",
    projectId: "app-demo-e5a45",
    storageBucket: "app-demo-e5a45.appspot.com",
    messagingSenderId: "287241599926",
    appId: "1:287241599926:web:1003beaba620108cf39f17",
    measurementId: "G-5PRS67085S"
  } 

  const firebaseApp = initializeApp(firebaseConfig) 

  const db = getFirestore(firebaseApp) 
export default db 


