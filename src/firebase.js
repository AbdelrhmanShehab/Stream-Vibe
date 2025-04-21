// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBwu6kN7_ED8scAlYRusjBhmbYZUVKh2VA",
  authDomain: "stream-vibe-auth.firebaseapp.com",
  projectId: "stream-vibe-auth",
  storageBucket: "stream-vibe-auth.appspot.com",
  messagingSenderId: "1019161786474",
  appId: "1:1019161786474:web:5c54984790a7d1a27df213",
  measurementId: "G-Z4NH0CR8CM",
};

//  Initialize firebases
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
