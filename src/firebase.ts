import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqzoapDEHSjapDe4keOKm_TgGoESlXXVQ",
    authDomain: "project2-cfe3c.firebaseapp.com",
    projectId: "project2-cfe3c",
    storageBucket: "project2-cfe3c.firebasestorage.app",
    messagingSenderId: "332143165712",
    appId: "1:332143165712:web:492cf0cfdd2dbec7046595",
    measurementId: "G-ZVG4KRVZMB"
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
