import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAI6fBK8h3JWBDUPnD4u1Sn0-d3C8kf2nc",
    authDomain: "random-2be47.firebaseapp.com",
    projectId: "random-2be47",
    storageBucket: "random-2be47.appspot.com",
    messagingSenderId: "1037221002619",
    appId: "1:1037221002619:web:90256e8fd5be13e9cfd1de",
    measurementId: "G-QYXPZXCDEG"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app



