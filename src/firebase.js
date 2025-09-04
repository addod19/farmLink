import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseServiceId = process.env.REACT_APP_FIREBASE_SERVICE_ID;
const firebaseAuthDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const firebaseProjectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const firebaseStorageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const firebaseMessagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const firebaseAppId = process.env.REACT_APP_FIREBASE_APP_ID;
const firebaseMeasurementId = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;


const firebaseConfig = {
  apiKey: firebaseServiceId,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
  measurementId: firebaseMeasurementId
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
