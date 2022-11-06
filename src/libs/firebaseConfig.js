// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCuYSKgctODjVDcjhDSKeDJ6va5twHZPks',
  authDomain: 'image-galler-reactjs.firebaseapp.com',
  projectId: 'image-galler-reactjs',
  storageBucket: 'image-galler-reactjs.appspot.com',
  messagingSenderId: 'messagingSenderId',
  appId: 'appId',
  measurementId: 'G-R8ZNDKPYWV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const timesTamp = serverTimestamp();
