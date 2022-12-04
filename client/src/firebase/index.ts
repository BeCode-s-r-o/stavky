// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBfWZRVG5p-LE_44fiLviJWNZLnQI1YRHc',
  authDomain: 'forex-stavkove-poradenstvo.firebaseapp.com',
  projectId: 'forex-stavkove-poradenstvo',
  storageBucket: 'forex-stavkove-poradenstvo.appspot.com',
  messagingSenderId: '976524388340',
  appId: '1:976524388340:web:6fb8f2a543812aad663ba1',
  databaseURL: 'https://forex-stavkove-poradenstvo-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
