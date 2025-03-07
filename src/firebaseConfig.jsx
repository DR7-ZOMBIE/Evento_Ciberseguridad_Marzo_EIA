// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Reemplaza estos valores con la configuración de tu proyecto Firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8IIlRvkIhLLrxhJF8TC8YsE3jyoTs0tU",
  authDomain: "evento-marzo-ciber-eia.firebaseapp.com",
  projectId: "evento-marzo-ciber-eia",
  storageBucket: "evento-marzo-ciber-eia.firebasestorage.app",
  messagingSenderId: "37024304909",
  appId: "1:37024304909:web:9c07696627768ec9c86a44",
  measurementId: "G-JNKWY1Q79N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
