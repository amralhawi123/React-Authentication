import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,updateEmail, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updatePassword} from 'firebase/auth'
import auth from './../firebase';

const AuthContext = createContext()


const AuthProvider = ({children}) => {

   const [currntUser, setCurrntUser] = useState()
   const [loading, setLoading] = useState(true)

   const signup = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const logIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }
   const resetpassword = (email ) => {
      return sendPasswordResetEmail(auth, email)
   }
   const updateUserEmail = (email ) => {
      return updateEmail(auth.currentUser, email)
   }
   const updateUserPassword = (password ) => {
      return updatePassword(auth.currentUser, password)
   }
   const logOut = () => {
      return signOut(auth)
   }

   useEffect(() => {
      const unsubscribe= onAuthStateChanged(auth, (user) => {
         setCurrntUser(user)
         setLoading(false)
      })
      return() => {
         unsubscribe()
      }
   }, [])
  return (
   <AuthContext.Provider value={{currntUser, signup, logOut, logIn, resetpassword, updateUserEmail, updateUserPassword}}>
      {!loading && children}
   </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
   return useContext(AuthContext)
}