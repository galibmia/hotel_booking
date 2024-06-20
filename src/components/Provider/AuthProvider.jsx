import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import app from "../../firebase/firebase.config"

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState('');

    const handleResetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    const logOut = () => {
        return signOut(auth)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        createUser,
        logInWithPassword,
        profileUpdate,
        error,
        setError,
        loading,
        setLoading,
        logOut,
        handleResetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;