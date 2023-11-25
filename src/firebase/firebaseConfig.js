import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDm3tQD3uquJsCopHpreUqvR7mZqX9PoeA",
  authDomain: "veganchowtest.firebaseapp.com",
  projectId: "veganchowtest",
  storageBucket: "veganchowtest.appspot.com",
  messagingSenderId: "938218768281",
  appId: "1:938218768281:web:e1d839a7a1f33c4fa1b508"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)