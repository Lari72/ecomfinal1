
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3FT_hYXluS_kRTKxTPA1FBfdhizE-bKA",
  authDomain: "almacenonline-7446f.firebaseapp.com",
  projectId: "almacenonline-7446f",
  storageBucket: "almacenonline-7446f.appspot.com",
  messagingSenderId: "422924326125",
  appId: "1:422924326125:web:b3179ab55aec22ed5328e4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);