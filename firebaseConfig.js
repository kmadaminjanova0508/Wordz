// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi_bwwMMLK-fGrtCO4LW0dJS5bKn561vM",
  authDomain: "wordz-auth.firebaseapp.com",
  projectId: "wordz-auth",
  storageBucket: "wordz-auth.appspot.com",
  messagingSenderId: "103851198887",
  appId: "1:103851198887:web:7802b370715afee8d2ce82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with React Native Persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
