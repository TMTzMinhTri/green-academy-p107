import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { createContext, useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { auth, facebookProvider, googleProvider, storage } from "../libs/firebase";

export const AuthContext = createContext({
    currentUser: null,
    login: () => { },
    logOut: () => { },
    register: () => { },
    updateProfile: () => { },
    uploadAvatarToStorage: () => { }
})

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)

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
        uploadAvatarToStorage
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
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

