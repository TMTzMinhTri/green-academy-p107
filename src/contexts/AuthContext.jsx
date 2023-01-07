import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { createContext, useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { auth, db, facebookProvider, googleProvider, storage } from "../libs/firebase";

export const AuthContext = createContext({
    currentUser: null,
    login: () => { },
    logOut: () => { },
    register: () => { },
    updateProfile: () => { },
    uploadAvatarToStorage: () => { },
})

// collection(db, 'products')
// doc(db, 'products', '2ifKDJtxVwRhFqa280w5')

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)


    const createNewUserIfNotExits = async (user) => {
        const userRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(userRef)
        if (docSnap.exists()) {
            return docSnap.data()
        }
        await createUser(user)
    }

    const createUser = async (user) => {
        const data = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            id: user.uid
        }
        // add new document (auto generate Id)
        // const usersRef = collection(db, "users")
        // const document = await addDoc(usersRef, data)

        //add new document (seft control id)
        const userRef = doc(db, 'users', user.uid)
        await setDoc(userRef, data)
    }

    const uploadAvatarToStorage = async (file) => {
        const storageRef = ref(storage, `avatar/${currentUser.email}`);
        const snapshot = await uploadBytes(storageRef, file)
        return snapshot.ref
    }

    const updateProfileCurrentUser = async (displayName, photo) => {
        //b1: upload photo
        const ref = await uploadAvatarToStorage(photo)
        //b2: lay photoURl
        const photoURL = await getDownloadURL(ref)
        //b3: lay display name va photo url update profile
        await updateProfile(auth.currentUser, {
            displayName,
            photoURL: photoURL
        })
        // b4: set current user
        setCurrentUser((prev) => ({ ...prev, displayName, photoURL }))
    }

    const register = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (type, email, password) => {
        switch (type) {
            case 'google':
                await signInWithPopup(auth, googleProvider);
                break;
            case 'facebook':
                await signInWithPopup(auth, facebookProvider);
                break;
            default:
                await signInWithEmailAndPassword(auth, email, password)
                break;
        }
    }

    const logOut = async () => {
        await signOut(auth)
    }

    const value = {
        currentUser,
        login: login,
        logOut,
        register,
        updateProfile: updateProfileCurrentUser,
        uploadAvatarToStorage,
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                await createNewUserIfNotExits(user)
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
            setLoading(false)
        })
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : <Spinner />}
        </AuthContext.Provider>
    )
}

export default AuthProvider

