import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import { config } from "../config";

const firebaseConfig = config.firebase;

const app = initializeApp(firebaseConfig);

export const facebookProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
