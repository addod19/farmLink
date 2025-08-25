import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyByDxFfR9pycHi0yezTLk0ZUx_uwzOVYhg",
  authDomain: "linkfarm-1cd0e.firebaseapp.com",
  projectId: "linkfarm-1cd0e",
  storageBucket: "linkfarm-1cd0e.firebasestorage.app",
  messagingSenderId: "232724006892",
  appId: "1:232724006892:web:1a404f41532fead7c6a2c9",
  measurementId: "G-C2GCNX0KH1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
