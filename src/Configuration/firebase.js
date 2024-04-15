// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcxWG6t2s1KoQCQDACuMvwxuMEzWxYm5I",
  authDomain: "marketplace-d1c8a.firebaseapp.com",
  projectId: "marketplace-d1c8a",
  storageBucket: "marketplace-d1c8a.appspot.com",
  messagingSenderId: "1063612427775",
  appId: "1:1063612427775:web:58c6c4637dfd602b4a0bca",
  measurementId: "G-V3BFJMF64D"
};


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app);