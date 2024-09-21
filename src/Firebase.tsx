import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8cSjHRWDR-gMmNe_O_XMu5rqpndOk1YQ",
  authDomain: "portfolio-15a33.firebaseapp.com",
  projectId: "portfolio-15a33",
  storageBucket: "portfolio-15a33.appspot.com",
  messagingSenderId: "1063001207044",
  appId: "1:1063001207044:web:e31b54dadc592d0b672051",
  measurementId: "G-BSYZ19WJGT"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);