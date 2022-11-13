// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPx1TQ3xm0dMX7ly3t-LH-jGrI0NRF6sI",
  authDomain: "whissride-test-1.firebaseapp.com",
  projectId: "whissride-test-1",
  storageBucket: "whissride-test-1.appspot.com",
  messagingSenderId: "763953825691",
  appId: "1:763953825691:web:f8fc2f04f15361565b033e",
  measurementId: "G-V224N7S44T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);