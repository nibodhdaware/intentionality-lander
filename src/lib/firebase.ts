import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCepAVjbZsx0z-M0sTvgp48AAt4bYBSq-U",
  authDomain: "intentionality-1ce65.firebaseapp.com",
  projectId: "intentionality-1ce65",
  storageBucket: "intentionality-1ce65.firebasestorage.app",
  messagingSenderId: "938266027514",
  appId: "1:938266027514:web:747ac62f30207ef05d3043",
  measurementId: "G-1891HVELCR"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

// Analytics is only supported in the browser
export const initAnalytics = async () => {
  if (typeof window !== "undefined" && await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};
