
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA8_-S_ZQQfR8W82gRg5AWEi88-uc9k0OU",
  authDomain: "fir-phone-auth-f8235.firebaseapp.com",
  projectId: "fir-phone-auth-f8235",
  storageBucket: "fir-phone-auth-f8235.firebasestorage.app",
  messagingSenderId: "784088265997",
  appId: "1:784088265997:web:5f41d7a4deb3801bd62c44"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)