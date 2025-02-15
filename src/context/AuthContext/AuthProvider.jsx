import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const handleRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    const handleUpdateProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    

    // onAuthStateChange functionality
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user state captured', currentUser?.email)

            // jwt token work starts here
            if (currentUser?.email) {
                const user = { email: currentUser.email};

                axios.post('http://localhost:8000/jwt',user ,{withCredentials:true})
                .then(res => console.log('login token',res.data))
                setUser(currentUser);
                setLoading(false);
            }
            else {
                axios.post('http://localhost:8000/logout', {},)
                .then(res => console.log('logout', res.data))
                setUser(null)
                setLoading(false);
            }
            // jwt token work ends here
        })
        return () => unSubscribe();

    }, [])



    const authInfo = {
        user,
        loading,
        handleRegister,
        handleLoginUser,
        signOutUser,
        handleUpdateProfile,
        signInWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;