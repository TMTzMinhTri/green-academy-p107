import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { config } from '../config';

const firebaseConfig = config.firebase

const app = initializeApp(firebaseConfig);

export const facebookProvider = new FacebookAuthProvider();
export const auth = getAuth(app);