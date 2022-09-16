import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD7ldzz4l2sVVWLQntbH4k-AqcJHPmoJ2Q",
  authDomain: "loginex-77fca.firebaseapp.com",
  projectId: "loginex-77fca",
  storageBucket: "loginex-77fca.appspot.com",
  messagingSenderId: "541741846806",
  appId: "1:541741846806:web:61f70241d88f7a861c0037"
};

//INITIALIZE FIREBASE

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

